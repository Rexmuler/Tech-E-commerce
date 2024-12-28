import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Cart } from "./pages/Checkout/Cart";
import { ProductDetail } from "./pages/ProductDetail";
import { LoginSignupPage } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Shop } from "./pages/Shop";
import { Slide, ToastContainer, toast } from "react-toastify";
import { See } from "./pages/Checkout/See";
import Checkout from "./pages/Checkout/Checkout";
const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Show loading for 5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (!navigator.onLine) {
    toast.loading("Checking Network.....");
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
        <div
          aria-label="Loading..."
          role="status"
          className="flex flex-col items-center space-y-4"
        >
          <svg
        className="h-20 w-20 animate-spin stroke-gray-500"
        viewBox="0 0 256 256"
          >
        <line
          x1="128"
          y1="32"
          x2="128"
          y2="64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="195.9"
          y1="60.1"
          x2="173.3"
          y2="82.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="224"
          y1="128"
          x2="192"
          y2="128"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="195.9"
          y1="195.9"
          x2="173.3"
          y2="173.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="224"
          x2="128"
          y2="192"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="60.1"
          y1="195.9"
          x2="82.7"
          y2="173.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="32"
          y1="128"
          x2="64"
          y2="128"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="60.1"
          y1="60.1"
          x2="82.7"
          y2="82.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
          </svg>
          <span className="text-4xl font-medium text-gray-500">Loading...</span>
        </div>
      </div>
    );
  }


  
  if (!navigator.onLine) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
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

  return (
    <div>
    <BrowserRouter>
    <Routes>
          {/* Routes with Navbar and Footer */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/see" element={<See/> } />
                  <Route path="/Checkout" element={<Checkout />} />
                  <Route
                    path="/product/:category"
                    element={<ProductDetail />}
                  />
                  {/* Catch-all route for undefined paths */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            }
          />
          {/* Login page route without Navbar and Footer */}
          <Route path="/login" element={<LoginSignupPage />} />
          {/* Redirect undefined routes to NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
