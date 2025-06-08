import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Mask group.png';
import navIcon from '../assets/nav-icon.png';

const Nav = () => {
    return (
        <div className="navbar w-full max-w-[1440px] mx-auto ">
  <div className="navbar-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" mt-10 f lg:hidden">
        <img src={navIcon} alt="navbar-icon" />

      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-52 p-2 shadow">
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='/reservation'>Reservation</NavLink>
        <NavLink to='/service'>Services</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
        <NavLink to='/testimonials'>Management</NavLink>
      </ul>
    </div>
  </div>
  
  <div className="navbar text-white hidden lg:flex lg:item-center w-full max-w-[1440px] mx-auto">
    <ul className="menu menu-horizontal text-[18px] py-[5px] lg:flex lg:items-center justify-around w-full">
      <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/menu'>Menu</NavLink></li>
            <li className=""><Link to='/' className=""><img src={logo} alt="logo" /></Link></li>
        <li><NavLink to='/reservation'>Reservation</NavLink></li>
        <NavLink to='/gallery'>Gallery</NavLink>
        <li><NavLink to='/management'>Management</NavLink></li>
    </ul>
  </div>
</div>
    );
};

export default Nav;