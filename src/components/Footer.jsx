import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <section id="contact" className="lato h-screen">
    <footer className="bg-gray-900 text-white p-3 pt-10 pb-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo and Social Links Section */}
          <div className="space-y-16">
            <div className="space-y-5">
              <h2 className="text-5xl font-semibold">Business Solutions</h2>
              <p className="text-gray-300 text-2xl">Exploring Businesses Together</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-9 w-9" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook className="h-9 w-9" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube className="h-9 w-9" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <div className="space-y-5 text-md text-gray-300">
              <h3 className="font-semibold text-2xl text-white">Street address</h3>
              <p>Ward No. 4,</p>
              <p>Ahmedabad, India</p>
              <p>Opposite to Science City Academy Hall</p>
            </div>
          </div>

          {/* About Business Section */}
          <div className="space-y-9">
            <h3 className="text-2xl font-semibold">About Businesses</h3>
            <ul className="space-y-4 text-md text-gray-300">
              <li><a href="#" className="hover:text-white">Who are we</a></li>
              <li><a href="#" className="hover:text-white">Words from the principal</a></li>
              <li><a href="#" className="hover:text-white">Aims</a></li>
              <li><a href="#" className="hover:text-white">Vision</a></li>
              <li><a href="#" className="hover:text-white">Mission</a></li>
              <li><a href="#" className="hover:text-white">Management committee</a></li>
              <li><a href="#" className="hover:text-white">Faculties</a></li>
            </ul>
          </div>

          {/* Learning Approach Section */}
          <div className="space-y-14">
            <h3 className="text-2xl font-semibold">Learning approach</h3>
            <ul className="space-y-4 text-md text-gray-300">
              <li><a href="#" className="hover:text-white">Junior School</a></li>
              <li><a href="#" className="hover:text-white">Middle School</a></li>
              <li><a href="#" className="hover:text-white">Extended School Program</a></li>
              <li><a href="#" className="hover:text-white">Student's journey</a></li>
              <li><a href="#" className="hover:text-white">Wellness curriculum</a></li>
            </ul>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-2">Call us</h3>
              <p className="text-md text-gray-300">01-XXXXXXX</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Drop us your thoughts</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-3 py-2 bg-white text-gray-900 rounded" />
              <input type="email" placeholder="Email" className="w-full px-3 py-2 bg-white text-gray-900 rounded" />
              <textarea placeholder="Message" rows={4} className="w-full px-3 py-2 bg-white text-gray-900 rounded resize-none" />
              <button
                type="submit"
                className="px-6 py-2 bg-[#E85C3F] text-white rounded hover:bg-[#d54e33] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center text-2xl text-gray-300">
          <p className="text-center">Made by Dhyan Patel</p>
        </div>
      </div>
    </footer>
    </section>
  );
}
