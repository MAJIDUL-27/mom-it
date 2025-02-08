const HoreOne = () => {
  return (
    <>
      <div className="relative h-screen bg-transparent">
        <div className="absolute inset-0">
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-black mb-4 md:text-6xl lg:text-7xl">
            Al-SUNNA MADRASA
          </h1>
          <p className="text-lg text-black mb-8 md:text-xl lg:text-2xl">
            WE ARE SERIOUS ABOUT EDUCATION
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
            EXPORE MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default HoreOne;
