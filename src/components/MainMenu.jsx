import menu1 from '../assets/m1.png';
import menu2 from '../assets/m2.png';
import menu3 from '../assets/m3.png';
import menu4 from '../assets/m4.png';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div className='w-full max-w-screen-[1440px] flex flex-col items-center gap-9 justify-center pl-[100px]'>
            {/* menu1 */}
            <NavLink to="main_dishes" className="mb-[20px]">
                <div className="relative w-[574px] h-[235px] overflow-hidden rounded-xl">
                    <img
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                        src={menu1}
                        alt="Main Dishes"
                    />
                    <h1 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl font-pacifico text-[#E9C94B]'>
                        Main Dishes
                    </h1>
                </div>
            </NavLink>

            {/* menu2 */}
            <NavLink to="fast_food" className="mb-[20px]">
                <div className="relative w-[574px] h-[235px] overflow-hidden rounded-xl">
                    <img
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                        src={menu4}
                        alt="Fast Food"
                    />
                    <h1 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl font-pacifico text-[#E9C94B]'>
                        Fast Food
                    </h1>
                </div>
            </NavLink>

            {/* menu3 */}
            <NavLink to="rice_dish" className="mb-[20px]">
                <div className="relative w-[574px] h-[235px] overflow-hidden rounded-xl">
                    <img
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                        src={menu3}
                        alt="Rice Dish"
                    />
                    <h1 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl font-pacifico text-[#E9C94B]'>
                        Rice Dish
                    </h1>
                </div>
            </NavLink>

            {/* menu4 */}
            <NavLink to="thai" className="mb-[20px]">
                <div className="relative w-[574px] h-[235px] overflow-hidden rounded-xl">
                    <img
                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                        src={menu2}
                        alt="Thai & Chinese"
                    />
                    <h1 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl font-pacifico text-[#E9C94B]'>
                        Thai & Chinese
                    </h1>
                </div>
            </NavLink>
        </div>
    );
};

export default MainMenu;
