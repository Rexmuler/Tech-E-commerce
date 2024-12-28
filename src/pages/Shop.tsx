import { useContext, useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import { ProductContext } from "../Context/Contex";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: "pc" | "tv" | "phone";
  price: number;
  rating: number;
  image: string;
  description: string;
}

export function Shop() {
  const navigate = useNavigate();
  const { setSelectedProduct } = useContext(ProductContext)!;

  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [minRating, setMinRating] = useState<number>(0);

  const products: Product[] = [
    {
      id: 1,
      name: "Ultimate Gaming PC",
      category: "pc",
      price: 1499.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Powerful gaming rig with the latest GPU and CPU. Features high-speed RAM and ample storage for all your gaming needs.",
    },
    {
      id: 2,
      name: "Gaming PC",
      category: "pc",
      price: 1499.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Powerful gaming rig with the latest GPU and CPU. Features high-speed RAM and ample storage for all your gaming needs.",
    },

    {
      id: 2,
      name: "Ultra 4K TV",
      category: "tv",
      price: 799.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1603209898253-8d0d2c3e60c6",
      description:
        "Crystal clear 4K resolution with smart features. Enjoy your favorite streaming services and apps on this large, vibrant display.",
    },
    {
      id: 3,
      name: "Flagship Smartphone",
      category: "phone",
      price: 999.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "Cutting-edge smartphone with advanced camera system. Featuring a powerful processor, long-lasting battery, and stunning display.",
    },
    {
      id: 4,
      name: "Premium Ultrabook",
      category: "pc",
      price: 1299.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      description:
        "Thin and light laptop for professionals on the go. Combines performance with portability, perfect for work and entertainment.",
    },
    {
      id: 5,
      name: "Premium OLED TV",
      category: "tv",
      price: 1499.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1583433375496-2e23b24172f4",
      description:
        "Stunning OLED display with perfect blacks and vibrant colors. Immerse yourself in your favorite movies and shows with this top-of-the-line TV.",
    },
    {
      id: 6,
      name: "Entry-Level Smartphone",
      category: "phone",
      price: 299.99,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
      description:
        "Affordable smartphone with great features for the price. Perfect for everyday use, with a reliable camera and good battery life.",
    },
    {
      id: 7,
      name: "Mid-Range Smartphone",
      category: "phone",
      price: 399.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
      description:
        "Smartphone offering solid performance at a great price. Featuring an impressive camera and good battery life.",
    },
    {
      id: 8,
      name: "Flagship Smartphone Plus",
      category: "phone",
      price: 1199.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
      description:
        "High-end smartphone with a powerful camera system and premium features for an exceptional mobile experience.",
    },
    {
      id: 9,
      name: "Super Budget Smartphone",
      category: "phone",
      price: 199.99,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
      description:
        "A very affordable smartphone with basic features, perfect for those looking for a budget-friendly device.",
    },
    {
      id: 10,
      name: "Premium 4K Smart TV",
      category: "tv",
      price: 1299.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1583433375496-2e23b24172f4",
      description:
        "High-end 4K smart TV that offers excellent image quality and smart features for streaming.",
    },
    {
      id: 11,
      name: "Gaming Ultrabook",
      category: "pc",
      price: 1699.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      description:
        "A perfect blend of gaming performance and portability, this ultrabook is designed for high-performance gaming on the go.",
    },
    {
      id: 12,
      name: "Ultra High-Performance Gaming PC",
      category: "pc",
      price: 1999.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Top-of-the-line gaming PC built for maximum performance with the latest graphics and processors.",
    },
    {
      id: 13,
      name: "Smart OLED TV",
      category: "tv",
      price: 1599.99,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1583433375496-2e23b24172f4",
      description:
        "State-of-the-art OLED TV with unmatched picture quality and smart features for streaming and gaming.",
    },
    {
      id: 14,
      name: "Gaming Smartphone Pro",
      category: "phone",
      price: 799.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "A gaming-centric smartphone built for long hours of gaming with enhanced cooling and performance features.",
    },
    {
      id: 15,
      name: "5G Smartphone",
      category: "phone",
      price: 799.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "Next-generation 5G smartphone with lightning-fast speeds and amazing features for both productivity and entertainment.",
    },
    {
      id: 16,
      name: "Flagship OLED TV",
      category: "tv",
      price: 1799.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1583433375496-2e23b24172f4",
      description:
        "Exceptional OLED TV with perfect black levels and excellent color accuracy, perfect for movie lovers.",
    },
    {
      id: 17,
      name: "Super High-End Gaming PC",
      category: "pc",
      price: 2999.99,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Extreme performance gaming PC that can handle any game at the highest settings.",
    },
    {
      id: 18,
      name: "Smartphone with 108MP Camera",
      category: "phone",
      price: 1099.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "Smartphone with a flagship-level 108MP camera, perfect for photography enthusiasts.",
    },
    {
      id: 19,
      name: "Affordable LED TV",
      category: "tv",
      price: 399.99,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1603209898253-8d0d2c3e60c6",
      description:
        "Budget-friendly LED TV with solid image quality for those looking for an affordable TV option.",
    },
    {
      id: 20,
      name: "Advanced Gaming PC",
      category: "pc",
      price: 1699.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Advanced gaming PC with top-tier specs designed for the most demanding games and applications.",
    },
    {
      id: 21,
      name: "Mini LED Smart TV",
      category: "tv",
      price: 999.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1603209898253-8d0d2c3e60c6",
      description:
        "Compact LED smart TV with excellent picture quality and smart features for a complete viewing experience.",
    },
    {
      id: 22,
      name: "Smartphone with 5G Connectivity",
      category: "phone",
      price: 699.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "5G enabled smartphone offering blazing fast internet speeds and an immersive experience.",
    },
    {
      id: 23,
      name: "4K Ultra HD TV",
      category: "tv",
      price: 1199.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1603209898253-8d0d2c3e60c6",
      description:
        "Ultra HD 4K TV with stunning visuals and smart streaming features for an enhanced viewing experience.",
    },
    {
      id: 24,
      name: "High-End 4K OLED TV",
      category: "tv",
      price: 2499.99,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1583433375496-2e23b24172f4",
      description:
        "High-end 4K OLED TV with impeccable color accuracy and perfect blacks for the most vibrant visuals.",
    },
    {
      id: 25,
      name: "Luxury Gaming PC",
      category: "pc",
      price: 2499.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "A premium gaming PC that combines beauty with performance for the most demanding gamers.",
    },
    {
      id: 26,
      name: "Smartphone for Gaming",
      category: "phone",
      price: 799.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "Gaming smartphone with high refresh rates and great performance for a smooth gaming experience.",
    },
    {
      id: 27,
      name: "Professional Gaming PC",
      category: "pc",
      price: 2599.99,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Built for professional gamers, this PC features ultra-fast performance and supports high-end gaming requirements.",
    },
    {
      id: 28,
      name: "Budget LED TV",
      category: "tv",
      price: 499.99,
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1603209898253-8d0d2c3e60c6",
      description:
        "Affordable LED TV offering excellent value for money with solid image quality.",
    },
    {
      id: 29,
      name: "4K OLED TV Premium",
      category: "tv",
      price: 1899.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1583433375496-2e23b24172f4",
      description:
        "Premium 4K OLED TV with perfect blacks and vibrant colors, designed for the best cinematic experience.",
    },
    {
      id: 30,
      name: "Pro Gaming PC",
      category: "pc",
      price: 2999.99,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Top-tier gaming PC with cutting-edge specs for professionals and enthusiasts.",
    },
  ];

  // Filter logic
  const applyFilters = (products: Product[]) =>
    products.filter(
      (product) => product.price <= maxPrice && product.rating >= minRating
    );

  const filteredProducts = applyFilters(products);

  return (
    <div className="min-h-screen bg-gray-900 text-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">
          Welcome to Our Tech Shop
        </h1>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-white mr-2">Price: </span>
              <input
                type="range"
                min="0"
                max="2000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mr-2"
              />
              <span className="text-white mr-2">${maxPrice}</span>
            </div>
            <div className="flex items-center">
              <span className="text-white mr-2">Rating: </span>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="mr-2"
              />
              <span className="text-white mr-2">{minRating}★</span>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`} // Ensure the key is unique
              className="product-card" // Add your className here for styling
            >
              <ProductCard
                product={product}
                onClick={() => {
                  setSelectedProduct(product);
                  navigate("/see");
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={500}
        transition={Slide}
        closeOnClick
        hideProgressBar
        limit={1}
        stacked
        className="top-3 max-w-[337px] w-[10px] left-[50%] -translate-x-[50%]"
      />
    </div>
  );
}
