import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Path2Placement</h1>
        <div className="space-x-4">
          <Link to="/login">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Your Ultimate Guide to Crack Placements 🚀
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            DSA Sheets, Core Subjects, Practice Tracker — all in one place.
          </p>
          <Link to="/dashboard">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-lg">
              Start Preparing
            </button>
          </Link>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src="https://illustrations.popsy.co/gray/web-developer.svg"
            alt="Coding Illustration"
            className="w-[400px]"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
