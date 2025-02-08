const DepartmentGroups = () => {
  return (
    <div className="bg-transparent flex flex-col items-center justify-center py-10 ">
      <h2 className="text-center text-gray-700 text-2xl font-bold mb-6">
        আমাদের বিভাগ সমূহ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <span className="text-gray-700 text-lg font-medium">কিতাব</span>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <span className="text-gray-700 text-lg font-medium">নাজেরা</span>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <span className="text-gray-700 text-lg font-medium">নামেज़</span>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <span className="text-gray-700 text-lg font-medium">ম</span>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <span className="text-gray-700 text-lg font-medium">মক্তব</span>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <span className="text-gray-700 text-lg font-medium">হিফজ</span>
        </div>
      </div>
    </div>
  );
};

export default DepartmentGroups;
