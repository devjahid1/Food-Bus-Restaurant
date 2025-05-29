
import About from '../components/About';
import Service from '../components/Service';
import Testimonials from '../components/Testimonials';
import GallaryGrid from '../components/GallaryGrid';

const Home = () => {
    return (
        <div>
            <Service/>
            <About/>
            <Testimonials/>
            <GallaryGrid/>
            
        </div>
    );
};

export default Home;