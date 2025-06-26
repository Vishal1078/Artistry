'use client';

import { useEffect, useState } from "react";

// ✅ Define a type for submissions
type Artist = {
  name: string;
  category: string;
  city: string;
  fee: string;
};

// ✅ Dummy data typed using Artist[]
const dummySubmissions: Artist[] = [
  { name: "Amit Sharma", category: "Singer", city: "Delhi", fee: "₹10,000 - ₹25,000" },
  { name: "Neha Verma", category: "Dancer", city: "Mumbai", fee: "₹5,000 - ₹15,000" }
];

export default function DashboardPage() {
  // ✅ Type the state properly as Artist[]
  const [submissions, setSubmissions] = useState<Artist[]>([]);

  // ✅ Set the dummy data on mount
  useEffect(() => {
    setSubmissions(dummySubmissions);
  }, []);

  const handleDelete = (index: number) => {
    setSubmissions(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>

      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Fee</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((artist, idx) => (
            <tr key={idx} className="text-center">
              <td className="p-2 border">{artist.name}</td>
              <td className="p-2 border">{artist.category}</td>
              <td className="p-2 border">{artist.city}</td>
              <td className="p-2 border">{artist.fee}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleDelete(idx)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
