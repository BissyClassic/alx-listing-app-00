import React, { useMemo, useState } from "react";
import type { NextPage } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/ui/PropertyCard";
import Pill from "@/components/ui/Pill";
import { Property } from "@/interfaces";

const filterLabels = [
  "Top Villa",
  "Self Checking",
  "Beachfront",
  "Pool",
  "Free Wifi",
  "Restaurant"
]

const Home: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [minRating, setMinRating] = useState<number>(0);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = PROPERTYLISTINGSAMPLE;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => 
          p.name.toLowerCase().includes(q) ||
         p.address.city.toLowerCase().includes(q) ||
         p.address.state.toLowerCase().includes(q)
      );
    }
    if (activeFilter) {
      const key = activeFilter.toLowerCase();
      list = list.filter((p) => p.category.join(" ").toLowerCase().includes(key));
    }
    if (minRating > 0) {
      list = list.filter((p) => p.rating >= minRating)
    }

    return list;
   }, [search, minRating, activeFilter]);

   return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div
          className="h-56 sm:h-72 md:h-96 bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')` // put your image in public/images
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Find your favorite place here!
            </h1>
            <p className="text-white mt-2 text-sm sm:text-base">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {filterLabels.map((label) => (
                <Pill
                  key={label}
                  label={label}
                  active={activeFilter === label}
                  onClick={() => setActiveFilter(activeFilter === label ? null : label)}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, city or state"
                className="px-3 py-2 border rounded-md"
              />
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="px-3 py-2 border rounded-md"
                aria-label="Minimum rating filter"
              >
                <option value={0}>Any rating</option>
                <option value={4}>4.0+</option>
                <option value={4.5}>4.5+</option>
                <option value={4.8}>4.8+</option>
              </select>
            </div>
          </div>

          {/* Listing grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p) => (
              <PropertyCard key={p.name} property={p} />
            ))}
          </div>

          {/* fallback */}
          {filtered.length === 0 && (
            <div className="text-center text-gray-600 py-8">No properties match your filters.</div>
          )}
        </div>
      </section>
    </div>
   );
  };

export default Home;