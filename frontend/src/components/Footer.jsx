import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-fuchsia-100 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Flex Container for Left and Right Sections */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Left Section: Logo + Contact Info */}
          <div>
            <h1 className="text-xl font-extrabold text-purple-500 font-mono">AM Fashion</h1>
            <div className="mt-4 space-y-1 text-sm">
              <div>Email: amfashion@gmail.com</div>
              <div>Phone: 1234567890</div>
            </div>
          </div>

          {/* Right Section: Categories + Info */}
          <div className="grid grid-cols-2 gap-10">
            {/* Categories */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Categories</h2>
              <ul className="space-y-1 text-sm">
                <li>Jhumkas</li>
                <li>Studs</li>
                <li>Minimalist</li>
                <li>Tear Drop</li>
                <li>Dangle Earrings</li>
                <li>Huggies</li>
                <li>Chandelier</li>
                <li>SALE</li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Information</h2>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Earring Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
