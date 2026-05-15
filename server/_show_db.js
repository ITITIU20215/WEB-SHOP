const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const db = mongoose.connection.db;
  const cols = await db.listCollections().toArray();
  console.log('=== DATABASE: webshop ===\n');
  for (const col of cols) {
    const count = await db.collection(col.name).countDocuments();
    const docs = await db.collection(col.name).find({}).limit(2).toArray();
    console.log('[' + col.name + '] — ' + count + ' documents');
    docs.forEach((d, i) => {
      console.log('  #' + (i+1) + ':', JSON.stringify(d, null, 4).split('\n').slice(0, 12).join('\n'));
    });
    console.log('');
  }
  process.exit(0);
}).catch(e => { console.error('Connection error:', e.message); process.exit(1); });
