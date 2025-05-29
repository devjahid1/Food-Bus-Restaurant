import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Mask group.png';

const Nav = () => {
    return (
        <div className="navbar">
  <div className="navbar-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-white lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='/reservation'>Reservation</NavLink>
        <NavLink to='/service'>Services</NavLink>
        <NavLink to='/testimonials'>Testimonials</NavLink>
      </ul>
    </div>
  </div>
  
  <div className="navbar text-white hidden lg:flex lg:item-center w-full max-w-[1440px] mx-auto">
    <ul className="menu menu-horizontal text-[18px] py-[54px] lg:flex lg:items-center justify-around w-full mr-48">
      <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
                <li><NavLink to='/reservation'>Reservation</NavLink></li>
            <li><Link to='/' className=""><img src={logo} alt="logo" /></Link></li>
        <li><NavLink to='/service'>Services</NavLink></li>
        <li><NavLink to='/testimonial'>Testimonials</NavLink></li>
    </ul>
  </div>
</div>
    );
};

export default Nav;