// components/layout/Header.tsx
import React, { useState } from "react";
import Link from "next/link";

const types = ["Rooms", "Mansion", "Countryside", "Villa", "Apartment"];

const Header: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            <Link href="/">
              🏠 MyListing
            </Link>

            <nav className="hidden md:flex gap-3">
              {types.map((t) => (
                <a key={t} className="text-sm hover:underline" href={`#${t.toLowerCase()}`}>
                  {t}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  aria-label="Search properties"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-64 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Search city, state or property..."
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm">Sign in</button>
              <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
