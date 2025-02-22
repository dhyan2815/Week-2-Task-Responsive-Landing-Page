import { useState, useEffect } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg"
];

const Products = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-black">
        <h2 className="text-6xl font-bold">Amazing Products</h2>
        <p className="text-2xl  mt-4">Discover the best features and benefits</p>
        <button className="mt-6 text-2xl px-6 py-2 bg-black text-white rounded-full hover:bg-gray-500">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Products;