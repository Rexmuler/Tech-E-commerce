import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  CreditCard,
  Truck,
  ShieldCheck,
  Clock
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Features Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Truck className="w-8 h-8 text-gray-400" />
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-gray-400">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="w-8 h-8 text-gray-400" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-400">Customer service</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <ShieldCheck className="w-8 h-8 text-gray-400" />
              <div>
                <h3 className="font-semibold">Secure Payments</h3>
                <p className="text-sm text-gray-400">100% secure see</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-gray-400">30 day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400 mb-4">
              We're dedicated to providing the best shopping experience with quality products and exceptional service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>123 Commerce St, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>support@store.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">My Account</a></li>
              <li><a href="#" className="hover:text-white transition">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white transition">Wishlist</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter and get 10% off your first purchase.
            </p>
            <form className="mb-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 px-4 py-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Your Store. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <img src="/visa.png" alt="Visa" className="h-8" />
              <img src="/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/paypal.png" alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

