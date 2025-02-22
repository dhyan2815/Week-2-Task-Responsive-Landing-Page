import { useState } from "react";
import '.././App.css'
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mplus bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <img src="https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg" className="h-10 w-10" alt="business logo" />

        <h1 className="text-2xl font-bold ml-40">Business Solutions</h1>

        {/* For mobile screen hamburger will appear */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
        <ul className={`md:flex space-x-4 ${open ? "block" : "hidden"}`}>
          <li><Link to="home" className="font-bold cursor-pointer hover:text-gray-400">Home</Link></li>
          <li><Link to="products" smooth={true} duration={800} className="font-bold cursor-pointer hover:text-gray-400">Products</Link></li>
          <li><Link to="features" smooth={true} duration={800} className="font-bold cursor-pointer hover:text-gray-400">Features</Link></li>
          <li><Link to="contact" smooth={true} duration={800} className="font-bold cursor-pointer hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;