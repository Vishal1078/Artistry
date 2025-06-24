import React from "react";

interface ArtistProps {
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image: string;
}

const ArtistCard = ({ name, category, priceRange, location, image }: ArtistProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-500">{category}</p>
      <p className="text-sm">{location}</p>
      <p className="text-sm font-semibold">{priceRange}</p>
      <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
        Ask for Quote
      </button>
    </div>
  );
};

export default ArtistCard;
