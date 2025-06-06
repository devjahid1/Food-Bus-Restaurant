import { Outlet } from 'react-router-dom';
import MenuBanner from '../components/MenuBanner';
import MenuAbout from '../components/MenuAbout';
import MainMenu from '../components/MainMenu';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import GallaryGrid from '../components/GallaryGrid';

const Menu = () => {
    return (
        <div className="mb-20">
            <MenuBanner />
            <MenuAbout />

            <div className="w-full max-w-[1440px] mx-auto mt-5 flex justify-center gap-6 px-4">
                <div className="w-full max-w-[520px]">
                    <MainMenu />
                </div>
                <div className="w-full max-w-[620px]">
                    <Outlet />
                </div>
            </div>

            <About />
            <Testimonials />
            <GallaryGrid />
        </div>
    );
};

export default Menu;
