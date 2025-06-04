import { Outlet } from 'react-router-dom';
import MenuBanner from '../components/MenuBanner';
import MenuAbout from '../components/MenuAbout';
import MainMenu from '../components/MainMenu';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import GallaryGrid from '../components/GallaryGrid';

const Menu = () => {
    return (
        <div className="">
            <MenuBanner />
            <MenuAbout />

            <div className="w-full max-w-screen-[1440px] pl-[99px] flex items-center justify-center gap-28 mt-8">
                <div className="w-1/4">
                    <MainMenu />
                </div>
                <div className="w-3/4">
                    <Outlet />
                </div>
            </div>

            <About />
            <Testimonials/>
            <GallaryGrid/>
        </div>
    );
};

export default Menu;
