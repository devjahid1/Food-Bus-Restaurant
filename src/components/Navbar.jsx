import Nav from "./Nav";

const Navbar = () => {
    return (
        <div className="bg-mBanner lg:bg-banner w-full max-w-screen-[1440px] mx-auto h-[900px] bg-cover bg-center bg-no-repeat ">
            {/* Navbar section */}
            <section>
                <Nav/>
            </section>

            {/* Hero text section */}
            <section className="w-full max-w-[1440px] mx-auto pt-2  lg:pt-20">
                <div className="w-full max-w-[749px] text-white pl-[20px]">
                    <h1 className="text-[32px] lg:text-[60px] font-pacifico"><span className="text-[#FE2833]">Flavors</span> That Travel <br /> With You</h1>
                    <p className="w-full max-w-[568px] text-[20px] pt-[36px] font-plusjakarta">From mouthwatering meals to full-on party setups, <br /> Food Bus is your one-stop destination for  great tastes</p>

                    <div className="pt-4 lg:pt-[68px] ">
                        <button className="py-[25px] px-[20px] btn mr-10 bg-[#E30814] text-white border-none shadow-none hover:bg-white hover:text-black text-[20px] font-plusjakarta">Book Now</button>
                        <button className="py-[25px] px-[20px] btn mr-10 bg-[#FFFFFF] text-black border-none shadow-none hover:bg-[#E30814] hover:text-white text-[20px] font-plusjakarta">Order Now</button>
                    </div>
                </div>
                <div className="w-full max-w-[691px]"></div>

            </section>
        </div>
    );
};

export default Navbar;