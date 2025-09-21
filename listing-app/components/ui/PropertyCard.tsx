import React from "react";
import type { PropertyProps } from "@/interfaces";
import { Property } from "@/interfaces";

interface PropertyCardProps {
  property: Property;
}


const PropertyCard: React.FC<{ Property: PropertyProps }> = ({ Property }) => {
 return (
    <article className="bg-green-400 rounded-lg shadow-sm font-medium overflow-hidden flex flex-cols">
        <div className="relative h-44 sm:h-52">
            <img 
            src="{property.image}"
            alt="{property.name}"
             className="w-full h-full object-cover"
            />
            
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{property.name}</h3>
            <div className="text-sm text-gray-600">⭐ {property.rating.toFixed(2)}</div>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {property.address.city}, {property.address.state}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {property.category.slice(0, 3).map((c) => (
              <span key={c} className="text-xs px-2 py-0.5 bg-gray-100 rounded">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Per night</div>
            <div className="text-lg font-bold">${property.price}</div>
          </div>

          <button className="px-3 py-1 bg-indigo-600 text-white rounded">Book</button>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;