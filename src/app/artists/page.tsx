'use client';
import React, { useEffect, useState } from "react";
import ArtistCard from "../../components/ArtistCard";
import artistsData from "../../../data/artists.json";

type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
  image: string;
};

export default function ArtistListingPage() {
  const [artists, setArtists] = useState<Artist[]>(artistsData as Artist[]);
  const [filters, setFilters] = useState({ category: "", location: "", price: "" });

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    let filtered: Artist[] = [...artistsData];
    if (filters.category) {
      filtered = filtered.filter((a) => a.category === filters.category);
    }
    if (filters.location) {
      filtered = filtered.filter((a) => a.location === filters.location);
    }
    if (filters.price) {
      filtered = filtered.filter((a) => a.priceRange === filters.price);
    }
    setArtists(filtered);
  }, [filters]);
  return (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Artist Directory</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <select name="category" onChange={handleFilter} className="border p-2 rounded">
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
        <option value="DJ">DJ</option>
      </select>
      <select name="location" onChange={handleFilter} className="border p-2 rounded">
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>
      <select name="price" onChange={handleFilter} className="border p-2 rounded">
        <option value="">All Prices</option>
        <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
        <option value="₹8,000 - ₹12,000">₹8,000 - ₹12,000</option>
        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
        <option value="₹12,000 - ₹20,000">₹12,000 - ₹20,000</option>
      </select>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} {...artist} />
      ))}
    </div>
  </div>
);

}
