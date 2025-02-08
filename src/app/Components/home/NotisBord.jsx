const NoticeBoard = () => {
  return (
    <div className="bg-transparentshadow-lg rounded-lg p-6 w-full max-w-md sm:max-w-full lg:max-w-full">
      <h2 className="text-center text-gray-700 text-xl font-bold mb-4">
        নোটিশ বোর্ড
      </h2>
      <p className="text-center text-gray-600 mb-6">8th February 2025</p>
      <div className="space-y-4">
        <label className="flex items-center justify-between bg-purple-50 p-4 rounded-lg border border-purple-200">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600"
          />
          <span className="text-gray-700">19 Nov - ঈদুল ফিতরের ছুটি</span>
        </label>
        <label className="flex items-center justify-between bg-purple-50 p-4 rounded-lg border border-purple-200">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-purple-600"
          />
          <span className="text-gray-700">14 Oct - পরীক্ষার ছুটি</span>
        </label>
      </div>
      <button className="mt-6 w-1/6 block mx-auto bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
        আরো দেখুন
      </button>
    </div>
  );
};

export default NoticeBoard;
