
import About from '../components/About';
import Service from '../components/Service';
import Testimonials from '../components/Testimonials';
import GallaryGrid from '../components/GallaryGrid';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            <Service/>
            <Menu/>
            <About/>
            <Testimonials/>
            <GallaryGrid/>
            
        </div>
    );
};

export default Home;