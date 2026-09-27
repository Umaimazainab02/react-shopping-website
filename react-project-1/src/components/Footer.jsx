import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white mt-20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              SooperMall
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Premium gadget accessories for work, travel, gaming
              and everyday life. Fast delivery across Pakistan.
            </p>

            {/* Social Media */}
            <div className="flex gap-4 mt-6 text-gray-300">
              <a href="#" className="hover:text-white transition font-bold">
                Facebook
              </a>

              <a href="#" className="hover:text-white transition font-bold">
                Instagram
              </a>

              <a href="#" className="hover:text-white transition font-bold">
                TikTok
              </a>

              <a href="#" className="hover:text-white transition font-bold">
                YouTube
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/DeskSetup" className="hover:text-white transition">
                  Desk Setup
                </a>
              </li>

              <li>
                <a href="/Travel-Gadgets" className="hover:text-white transition">
                  Travel Gadgets
                </a>
              </li>

              <li>
                <a href="/Gaming" className="hover:text-white transition">
                  Gaming
                </a>
              </li>

              <li>
                <a href="/Mobile-Accessories" className="hover:text-white transition">
                  Mobile Accessories
                </a>
              </li>
            </ul>
          </div>


          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Customer Care
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>
                Contact Us
              </p>

              <p>
                WhatsApp: +92 333 3399743
              </p>

              <p>
                Email: support@soopermall.com
              </p>

              <p>
                Location: Pakistan
              </p>

              <p>
                Support hours:
                <br />
                Monday–Saturday, 10 AM–7 PM
              </p>
            </div>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Get deals worth opening
            </h3>

            <p className="text-gray-400 leading-6">
              Subscribe for product launches, special offers
              and useful gadget updates.
            </p>

            <div className="mt-5">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none"
              />

              <button className="w-full bg-[#E5A64B] text-white font-medium py-3 rounded-lg mt-3 hover:bg-gray-600 transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 SooperMall. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;