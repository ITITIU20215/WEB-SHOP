// src/pages/ProductPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api.js";
import Button from "../components/Button.js";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleAddToCart = async (productId) => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        navigate("/login");
        return;
      }

      const response = await api.post("/carts/add-item", {
        user_id: userId,
        product_id: productId,
      });

      toast.success("Product added to cart successfully!");
      console.log("Product added to cart:", response.data);
    } catch (error) {
      toast.error("Error adding product to cart.");
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brown-400 py-[120px]">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col items-start gap-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 self-stretch">
            <h1 className="text-4xl md:text-display-2 font-bold text-black shrink-0">
              What are you{" "}
              <span className="block">
                <span className="text-orange-500">looking</span> for?
              </span>
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              {[
                { src: "./assets/Furniture.svg", label: "Furniture" },
                { src: "./assets/decor.svg", label: "Decoration" },
                { src: "./assets/Storage.svg", label: "Storage" },
                { src: "./assets/Lighting.svg", label: "Lighting" },
              ].map((cat) => (
                <div key={cat.label} className="flex flex-col items-start gap-3 sm:gap-5">
                  <img src={cat.src} className="w-full max-w-[160px] h-auto aspect-square" alt={cat.label} />
                  <h1 className="text-black font-DM Sans font-medium leading-5">{cat.label}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full border-t border-brown-800"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="rounded-2xl shadow-md cursor-pointer h-fit"
                onClick={() => handleProductClick(product._id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="space-y-3 bg-white p-5">
                  <div className="space-y-1">
                    <p className="text-brown-900 uppercase font-semibold text-sm">
                      {product.categoryId.name}
                    </p>
                    <h2 className="text-2xl font-semibold text-heading-black">
                      {product.name}
                    </h2>
                    <p className="text-neutral-text-gray text-lg">
                      {product.description}
                    </p>
                  </div>
                  <p className="text-heading-black font-semibold text-2xl">
                    ${product.price}
                  </p>
                </div>

                <Button
                  text="Add To Cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product._id);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
