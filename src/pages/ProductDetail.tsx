import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Star } from "lucide-react";
import { ProductContext } from "../Context/Contex";

interface Product {
  id: number;
  name: string;
  category: "pc" | "tv" | "phone";
  price: number;
  rating: number;
  image: string;
  description: string;
}

export const ProductDetail = () => {
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
      name: "4K Smart TV",
      category: "tv",
      price: 799.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1603209898253-8d0d2c3e60c6",
      description:
        "Crystal clear 4K resolution with smart features. Enjoy your favorite streaming services and apps on this large, vibrant display.",
    },
    {
      id: 3,
      name: "Iphone 15 Pro Max",
      category: "phone",
      price: 999.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "Cutting-edge smartphone with advanced camera system. Featuring a powerful processor, long-lasting battery, and stunning display.",
    },
    {
      id: 4,
      name: "Samsung 20+  Ultra",
      category: "phone",
      price: 1099.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Powerful gaming rig with the latest GPU and CPU. Features high-speed RAM and ample storage for all your gaming needs.",
    },
    {
      id: 5,
      name: "Dell Gaming PC",
      category: "pc",
      price: 599.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Powerful gaming rig with the latest GPU and CPU. Features high-speed RAM and ample storage for all your gaming needs.",
    },
    {
      id: 6,
      name: "8K Smart TV",
      category: "tv",
      price: 1499.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587202372775-9dba26dc55f2",
      description:
        "Crystal clear 8K resolution with smart features. Enjoy your favorite streaming services and apps on this large, vibrant display.",
    },
  ];

  const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({
    product,
    onClick,
  }) => (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const { category } = useParams();
  const navigate = useNavigate();
  const {  setSelectedProduct } = useContext(ProductContext)!;

  // Filter state
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [minRating, setMinRating] = useState<number>(0);

  // Function to apply filters
  const applyFilters = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.category === category &&
        product.price <= maxPrice &&
        product.rating >= minRating
      );
    });
  };

  // Apply filters to products
  const filteredProducts = applyFilters(products);

  return (
    <div className="min-h-screen bg-gray-900 text-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">
          {category?.toUpperCase()}
        </h1>

        {/* Filter UI */}
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

        {/* Product Grid */}
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => {
                setSelectedProduct(product);
                navigate("/see");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
