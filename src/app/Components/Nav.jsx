"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { status } = useSession();
  console.log(status);

  return (
    <nav className="bg-transparent text-black sticky top-0 z-1 border-b-1 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-600">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-lg font-bold">Navbar Scroll</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded">
              Home
            </Link>
            {status === "unauthenticated" && (
              <Link
                href="/login"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                Login
              </Link>
            )}
            {status === "unauthenticated" && (
              <Link
                href="/singup"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                Singup
              </Link>
            )}

            {status === "authenticated" && (
              <Link
                href="/dashbord"
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                Dashboard
              </Link>
            )}

            {status === "authenticated" && (
              <button
                onClick={() => signOut()}
                className="hover:bg-gray-700 px-3 py-2 rounded"
              >
                Sign Out
              </button>
            )}
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-900 text-sm px-4 py-2 rounded-l focus:outline-none focus:ring"
            />
            <button className="bg-teal-500 px-4 py-2 rounded-r hover:bg-teal-600">
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <Link href="/login" className="hover:bg-gray-700 px-3 py-2 rounded">
            login
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-center hover:bg-gray-700"
          >
            Link
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-center hover:bg-gray-700"
          >
            Link
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
