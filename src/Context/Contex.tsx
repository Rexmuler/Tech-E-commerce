import React, { createContext, useState, ReactNode } from "react";

// Define the Product type

interface Product {
    id: number;
    name: string;
    category: "pc" | "tv" | "phone";
    price: number;
    rating: number;
    image: string;
    description: string;
  }
  

// Define the context value type
interface ProductContextType {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}

// Create the context with an initial value of undefined
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Define the provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
