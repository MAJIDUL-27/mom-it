"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setIsloading] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsloading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (!result.error) {
        router.push("/");
      }
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="max-w-md w-full bg-transparent opacity-100 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">
          লগইন
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="emailOrPhone"
              className="block text-sm font-medium text-gray-700"
            >
              ইমেইল বা ফোন নম্বর
            </label>
            <input
              id="emailOrPhone"
              type="text"
              name="email"
              placeholder="আপনার ইমেইল বা ফোন নম্বর লিখুন"
              value={data?.email}
              onChange={(e) => handleChange(e)}
              className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              value={data?.password}
              onChange={(e) => handleChange(e)}
              className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-700"
            />
          </div>
          <div className="mb-4 text-right">
            <a
              href="#"
              className="text-sm text-purple-600 hover:text-purple-800"
            >
              পাসওয়ার্ড ভুলে গেছেন?
            </a>
          </div>
          {!loading && (
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition"
            >
              লগইন
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
