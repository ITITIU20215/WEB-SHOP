const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/Users');

const adminData = {
  first_name: 'Admin',
  last_name: 'Furnitech',
  name: 'Admin Furnitech',
  email: 'admin@furnitech.com',
  password: 'Admin@123',
  phone: '0123456789',
  address: '123 Furnitech Street, Ho Chi Minh City',
};

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected!');

    const existing = await User.findOne({ email: adminData.email });
    if (existing) {
      console.log('Admin already exists:', existing.email);
      process.exit(0);
    }

    const hashed = await bcrypt.hash(adminData.password, 10);
    const admin = await User.create({ ...adminData, password: hashed });

    console.log('\n✅ Admin created successfully!');
    console.log('─────────────────────────────');
    console.log('  ID      :', admin._id);
    console.log('  Name    :', admin.first_name, admin.last_name);
    console.log('  Email   :', adminData.email);
    console.log('  Password:', adminData.password);
    console.log('  Phone   :', admin.phone);
    console.log('  Address :', admin.address);
    console.log('─────────────────────────────');

    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

seed();
