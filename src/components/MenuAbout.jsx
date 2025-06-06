const MenuAbout = () => {
  return (
    <div className="w-full max-w-screen-[1440px] mx-auto mt-3 lg:mt-[70px] mb-3 lg:mb-[70px] flex items-end justify-around gap-20">
      {/* Text Section */}
      <div className="">
        <h1 className="text-[16px] font-semibold">OUR MENU</h1>
        <h2 className="font-pacifico text-[28px] lg:text-[42px] mt-2">
          Explore Our Delicious <span className="text-[#FE2833]">Menu</span>
        </h2>
        <p className="pt-6 pb-6 text-[16px] leading-relaxed">
          Discover a variety of mouthwatering dishes made with fresh ingredients
          and <br className="hidden lg:block" />
          bold flavors. Whether you're craving a quick snack or a hearty meal, there's <br className="hidden lg:block" />
          something delicious waiting for you.
        </p>
      </div>

      {/* Button Section */}
      <div className="">
        <button className=" border border-black px-8 py-2 rounded-md hover:bg-[#FE2833] hover:text-white hover:border-[#FE2833] transition duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default MenuAbout;
