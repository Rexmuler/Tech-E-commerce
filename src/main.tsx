import { ProductProvider } from "./Context/Contex.tsx";
import { CartProvider } from "./Context/CartContext.tsx";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </ProductProvider>
);
