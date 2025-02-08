"use client";
import Link from "next/link";

import UserAction from "@/action/UserAction";

const Page = () => {
  return (
    <div className="bg-transparent flex items-center justify-center min-h-screen px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-center text-gray-700 text-2xl font-bold mb-6">
          Sign Up
        </h2>
        <form className="space-y-4" action={UserAction}>
          <div>
            <label
              className="block text-gray-600 text-sm font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              className="block text-gray-600 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-gray-600 text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{"  "}
          <Link href="/login" className="text-purple-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
