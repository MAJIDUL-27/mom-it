// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-transparent py-8 w-full ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <img src="/logo.png" alt="Logo" className="w-20 mx-auto lg:mx-0" />
            <h3 className="text-lg font-semibold mt-2">টেইনিয়াস</h3>
            <p className="text-sm text-gray-700">
              বাংলাদেশে একটি বিখ্যাত প্রতিষ্ঠান
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <p className="text-sm text-gray-800">
              <span className="font-semibold">ঠিকানা:</span> সত্যপুর, মাগুরা
              সদর, মাগুরা
            </p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">ফোন:</span> 01709803348
            </p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">ইমেইল:</span>{" "}
              instituemomit@gmail.com
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center lg:text-right">
            <p className="text-sm text-gray-800">
              আমরা এখানে একত্রিত
              <br />
              ভালো মানুষ তৈরি করতে
              <br />
              এবং আপনাদের সন্তানদের
              <br />
              শীর্ষে উন্নত করতে অঙ্গীকারবদ্ধ।
            </p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition">
              যোগাযোগ করুন
            </button>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-600 text-sm">
          © 2025 All Rights Reserved For টেইনিয়াস
        </div>
      </div>
    </footer>
  );
}
