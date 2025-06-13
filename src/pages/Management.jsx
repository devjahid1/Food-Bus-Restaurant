import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import Nav from "../components/Nav";

const Management = () => {
  return (
    <div className="w-full max-w-screen-[1440px] mx-auto bg-menu bg-cover bg-no-repeat">
      <Nav />
      <hr />
      <section className="pt-[225px] pb-[100px]">
        <h1 className="text-[30px] lg:text-[60px] text-white text-center font-pacifico">
          Meet Our Managemet Team
        </h1>
        <h2 className="mt-[40px] text-center text-white text-[20px]">
          These are the people who will help you to organize your dream events
        </h2>
      </section>
<section className="w-full max-w-[1440px] mx-auto px-4 pb-10">
  {/* Top Row - 2 Members */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 justify-center">
    <div className="text-white text-center bg-black bg-opacity-40 p-4">
      <img src={p1} alt="Muffajol Hussen" className="w-[262px] h-[262px]  rounded-lg mx-auto mb-4" />
      <h3 className="font-bold">Name: Muffajol Hussen</h3>
      <p>Position: Chairman</p>
    </div>
    <div className="text-white text-center bg-black bg-opacity-40 p-4  shadow-lg">
      <img src={p4} alt="Azizul Islam Kashem" className="w-[262px] h-[262px] object-cover mx-auto rounded-lg mb-4" />
      <h3 className="font-bold">Name: Azizul Islam Kashem</h3>
      <p>Position: Managing Director</p>
    </div>
  </div>

  {/* Bottom Row - 5 Members */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
    <div className="text-white text-center bg-black bg-opacity-40 p-4 rounded-lg shadow-lg">
      <img src={p2} alt="Bilal Ahmed" className="w-[150px] h-[150px] lg:w-[262px] lg:h-[262px] object-cover mx-auto rounded-md mb-4" />
      <h3 className="font-bold">Name: Bilal Ahmed</h3>
      <p>Position: Director</p>
    </div>
    <div className="text-white text-center bg-black bg-opacity-40 p-4 rounded-lg shadow-lg">
      <img src={p3} alt="Mukid Miah" className="w-[150px] h-[150px] lg:w-[262px] lg:h-[262px] object-cover mx-auto rounded-md mb-4" />
      <h3 className="font-bold">Name: Mukid Miah</h3>
      <p>Position: Director</p>
    </div>
    <div className="text-white text-center bg-black bg-opacity-40 p-4 rounded-lg shadow-lg">
      <img src={p5} alt="Sideek Al Chowdhury" className="w-[150px] h-[150px] lg:w-[262px] lg:h-[262px] object-cover mx-auto rounded-md mb-4" />
      <h3 className="font-bold">Name: Sideek Al Chowdhury</h3>
      <p>Position: Director</p>
    </div>
    <div className="text-white text-center bg-black bg-opacity-40 p-4 rounded-lg shadow-lg">
      <img src={p6} alt="Ziyahul Haque" className="w-[150px] h-[150px] lg:w-[262px] lg:h-[262px] object-cover mx-auto rounded-md mb-4" />
      <h3 className="font-bold">Name: Ziyahul Haque</h3>
      <p>Position: Director</p>
    </div>
    <div className="text-white text-center bg-black bg-opacity-40 p-4 rounded-lg shadow-lg">
      <img src={p7} alt="Zohirul Islam" className="w-[150px] h-[150px] lg:w-[262px] lg:h-[262px] object-cover mx-auto rounded-md mb-4" />
      <h3 className="font-bold">Name: Zohirul Islam</h3>
      <p>Position: Director</p>
    </div>
  </div>
</section>


    </div>
  );
};

export default Management;
