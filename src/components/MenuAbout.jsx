const MenuAbout = () => {
  return (
    <div className="w-full max-w-screen-[1440px] pl-[99px] mx-auto mt-[140px]">
      <div className="lg:w-[755px]">
        <h1 className="text-[16px]">OUR MENU</h1>
        <h2 className="font-pacifico lg:text-[42px]">
          Explore Our Delicious <span className="text-[#FE2833]">Menu</span>
        </h2>
        <p className="pt-[24px] pb-[24px]">
          Discover a variety of mouthwatering dishes made with fresh ingredients
          and <br /> bold flavors. Whether you're craving a quick snack or a
          hearty meal, there's <br /> something delicious waiting for you
        </p>
      </div>
      <div className="w-full max-w-screen-[685px]"></div>

      <div className="w-full max-w-screen-[1440px] flex">
        <div className="w-full max-w-screen-[1000px]"></div>
        <div className="w-full max-w-[400px]">
            <button className="border-[1px] px-8 py-2 border-black rounded-md hover:bg-[#FE2833] hover:text-white hover:border-[#FE2833]">View All</button>
        </div>
      </div>
    </div>
  );
};

export default MenuAbout;
