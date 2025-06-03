import { FaLocationDot } from 'react-icons/fa6';
import icon from '../assets/carbon_diamond-solid.png'
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import logo from '../assets/Mask group.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer sm:footer-horizontal text-base-content bg-footerImg max-w-screen-[1440px] mx-auto p-10  text-white h-[850px] lg:h-[500px] bg-cover bg-no-repeat bg-center lg:flex lg:justify-around lg:items-center">
  <aside>

    <img className='mb-10' src={logo} alt="" />
    
    <p className='text-[18px] text-white font-plusjakarta leading-10'>
      From mouthwatering meals to
      <br />
      full-on party setups
    </p>
  </aside>
  <div>

    <div className='flex items-center gap-4 font-pacifico text-[24px] mb-10'>
        <img src={icon} alt="" />
        <h1 className="text-white">Get In Touch</h1>
    </div>

    <div className='ml-5 flex flex-col gap-5'>

        <div className='flex items-center gap-4 mb-5 clas'>
            <FaLocationDot className='text-gray-500 text-[20px]' />
            <h1 className='text-white'>East Mirabazar Dadapir Mazar Road, Sylhet</h1>
        </div>
        <div className='flex items-center gap-4 mb-5'>
            <FaPhoneAlt className='text-gray-500 text-[20px]' />
            <h1 className='text-white'>+880-1714-974-833</h1>
        </div>
        <div className='flex items-center gap-4 mb-5'>
            <MdOutlineAccessTimeFilled className='text-gray-500 text-[20px]' />
            <h1 className='text-white'>Always Open</h1>
        </div>

    </div>

  </div>
  <nav>

    <div className='flex items-center gap-4 font-pacifico text-[24px] mb-10 text-white'>
        <img src={icon} alt="" />
        <h1>Pages</h1>
    </div>

    <div className='flex flex-col gap-5 ml-5 text-white'>
        <Link to='/about' className="link link-hover">About us</Link>
    <Link to='/menu' className="link link-hover">Our Menu</Link>
    <Link to='/service' className="link link-hover">Our Services</Link>
    <Link to='/testimonials' className="link link-hover">Testimonials</Link>
    <Link to='/gallery' className="link link-hover">Gallery</Link>
    </div>
  </nav>

</div>
    );
};

export default Footer;