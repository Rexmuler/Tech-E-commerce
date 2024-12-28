import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Slide, ToastContainer } from "react-toastify";

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center h-[800px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto mt-[-120px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Discover Timeless Elegance in Every Detail
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Curated collections that blend contemporary design with artisanal craftsmanship
          </p>
          <Link to='/shop'>
          <button 
            className="group inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full
                     text-lg font-semibold transition-all duration-300 
                     hover:bg-gray-900 hover:text-white transform hover:scale-105"
          >
           Shop Now
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-white/50 mx-auto" />
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
  )
}