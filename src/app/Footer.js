import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-blue-600 text-2xl font-bold">🌊</span>
            </div>
            <p className="text-gray-500 text-sm">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-x"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-github"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800">Solutions</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-800">Marketing</a></li>
                <li><a href="#" className="hover:text-gray-800">Analytics</a></li>
                <li><a href="#" className="hover:text-gray-800">Automation</a></li>
                <li><a href="#" className="hover:text-gray-800">Commerce</a></li>
                <li><a href="#" className="hover:text-gray-800">Insights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Support</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-800">Submit ticket</a></li>
                <li><a href="#" className="hover:text-gray-800">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-800">Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Company</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-800">About</a></li>
                <li><a href="#" className="hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="hover:text-gray-800">Jobs</a></li>
                <li><a href="#" className="hover:text-gray-800">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Legal</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-800">Terms of service</a></li>
                <li><a href="#" className="hover:text-gray-800">Privacy policy</a></li>
                <li><a href="#" className="hover:text-gray-800">License</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
