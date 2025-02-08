const Hero = () => {
  return (
    <>
      <div className="bg-transparent p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="rounded-md p-2 mb-4">
                  <p className="text-black">পরীক্ষার ফলাফল</p>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="bg-white rounded-lg shadow p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="rounded-md p-2 mb-4">
                  <p className="text-black">ভর্তির আবেদন</p>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="bg-white rounded-lg shadow p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="rounded-md p-2 mb-4">
                  <p className="text-black">শিক্ষক লিস্ট</p>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="bg-white rounded-lg shadow p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="rounded-md p-2 mb-4">
                  <p className="text-black">ব্লগ</p>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="bg-white rounded-lg shadow p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="rounded-md p-2 mb-4">
                  <p className="text-black">নোটিশ</p>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="bg-white rounded-lg shadow p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                <div className="rounded-md p-2 mb-4">
                  <p className="text-black">গ্যালারী</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
