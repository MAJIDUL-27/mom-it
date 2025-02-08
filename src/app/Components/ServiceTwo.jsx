const ServiceTwo = () => {
  return (
    <>
      <div className="bg-transparent p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-purple-500 rounded-lg shadow p-6 text-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="rounded-md p-2 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v15m9-15v15m-9 0h9"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">DATE</h3>
              </div>
              <div className="flex items-center">
                <p className="text-xl font-bold mr-2">Feb. 7, 2025</p>
              </div>
            </div>

            <div className="bg-green-500 rounded-lg shadow p-6 text-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="rounded-md p-2 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-15v15m-7.5 0h15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">TODAY INCOME</h3>
              </div>
              <div className="flex items-center">
                <p className="text-xl font-bold mr-2">+ 0</p>
              </div>
            </div>

            <div className="bg-red-500 rounded-lg shadow p-6 text-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="rounded-md p-2 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-15v15m-7.5 0h15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">TODAY EXPENSE</h3>
              </div>
              <div className="flex items-center">
                <p className="text-xl font-bold mr-2">- 0</p>
              </div>
            </div>

            <div className="bg-blue-500 rounded-lg shadow p-6 text-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="rounded-md p-2 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-15v15m-7.5 0h15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">TODAY BALANCE</h3>
              </div>
              <div className="flex items-center">
                <p className="text-xl font-bold mr-2">0</p>
                <span className="ml-2">Taka Icon</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTwo;
