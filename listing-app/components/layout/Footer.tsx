import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} MyListing. All rights reserved.</p>
          <div className="text-sm text-gray-600">Privacy • Terms • Contact</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
