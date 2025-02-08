const Services = () => {
  return (
    <>
      <div className="bg-transparent p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* start */}
            {/* 1st Start */}
            <div className="bg-white rounded-lg shadow p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-md p-2 mr-2">
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
                      d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m12-3V9c0-.67-.18-1.3-.5-1.81a2 2 0 00-1-.55l-6-6A2 2 0 004.56 2.1A48.1 48.1 0 005 19.9v2m12-3c-.32.11-.65.22-.99.31m0 0l-3.9-3.9m3.9-3.9l-3.9 3.9"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Manage Branch</h3>
              </div>
              <p className="text-gray-600">Branch List, Update, Delete</p>
            </div>
            {/* 1st end */}
            <div className="bg-white rounded-lg shadow p-6 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 rounded-md p-2 mr-2">
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
                      d="M18.64 9.72A9.977 9.977 0 0116 16.36v2.1c0 .74-.59 1.33-1.33 1.33H9.33A1.33 1.33 0 018 19.76v-2.1c0-2.03 1.53-3.75 3.56-3.97m1.07-.42C10.32 9.4 9 7.92 9 6.5A5.5 5.5 0 0114.5 1 5.5 5.5 0 0119 6.5c0 1.42-1.33 2.9-3.17 3.28a8.785 8.785 0 01-1.64-.07z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Donation</h3>
              </div>
              <p className="text-gray-600">Donor List, Update, Delete</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 rounded-md p-2 mr-2">
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
                      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5m-9 1.5c0 2.25.895 4.298 2.398 5.8A7 7 0 009 21c7 0 7-9 7-9m-7 9v6m-4.082-.04l-.548.9A6.782 6.782 0 004 21c0 .34.02.68.062 1.022m0 0C4.86 22.982 9 21 9 21m0 0c0 2.25.895 4.298 2.398 5.8A7 7 0 009 21m-9-9c0 2.25.895 4.298 2.398 5.8A7 7 0 009 21"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Certificate</h3>
              </div>
              <p className="text-gray-600">
                Create Certificate, Update, Delete
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 rounded-md p-2 mr-2">
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
                      d="M12 6.042a8.967 8.967 0 00-8.949 8.949c.318 1.567 1.19 3.028 2.472 4.192A48.108 48.108 0 0012 21.75c4.24 0 8.04-3.38 8.04-7.596a8.963 8.963 0 00-8.945-8.945m0-2.001V4.092m0 10.85v-5.958m0-2.001v-5.958"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Payroll</h3>
              </div>
              <p className="text-gray-600">
                Teacher Salary, Create, Update, Delete
              </p>
            </div>
            {/*4 end */}

            {/* 5st */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-md p-2 mr-2">
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
                      d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m12-3V9c0-.67-.18-1.3-.5-1.81a2 2 0 00-1-.55l-6-6A2 2 0 004.56 2.1A48.1 48.1 0 005 19.9v2m12-3c-.32.11-.65.22-.99.31m0 0l-3.9-3.9m3.9-3.9l-3.9 3.9"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Manage Branch</h3>
              </div>
              <p className="text-gray-600">Branch List, Update, Delete</p>
            </div>
            {/* 6st end */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 rounded-md p-2 mr-2">
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
                      d="M18.64 9.72A9.977 9.977 0 0116 16.36v2.1c0 .74-.59 1.33-1.33 1.33H9.33A1.33 1.33 0 018 19.76v-2.1c0-2.03 1.53-3.75 3.56-3.97m1.07-.42C10.32 9.4 9 7.92 9 6.5A5.5 5.5 0 0114.5 1 5.5 5.5 0 0119 6.5c0 1.42-1.33 2.9-3.17 3.28a8.785 8.785 0 01-1.64-.07z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Donation</h3>
              </div>
              <p className="text-gray-600">Donor List, Update, Delete</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 rounded-md p-2 mr-2">
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
                      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5m-9 1.5c0 2.25.895 4.298 2.398 5.8A7 7 0 009 21c7 0 7-9 7-9m-7 9v6m-4.082-.04l-.548.9A6.782 6.782 0 004 21c0 .34.02.68.062 1.022m0 0C4.86 22.982 9 21 9 21m0 0c0 2.25.895 4.298 2.398 5.8A7 7 0 009 21m-9-9c0 2.25.895 4.298 2.398 5.8A7 7 0 009 21"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Certificate</h3>
              </div>
              <p className="text-gray-600">
                Create Certificate, Update, Delete
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 rounded-md p-2 mr-2">
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
                      d="M12 6.042a8.967 8.967 0 00-8.949 8.949c.318 1.567 1.19 3.028 2.472 4.192A48.108 48.108 0 0012 21.75c4.24 0 8.04-3.38 8.04-7.596a8.963 8.963 0 00-8.945-8.945m0-2.001V4.092m0 10.85v-5.958m0-2.001v-5.958"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Payroll</h3>
              </div>
              <p className="text-gray-600">
                Teacher Salary, Create, Update, Delete
              </p>
            </div>
            {/* 8nd */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
