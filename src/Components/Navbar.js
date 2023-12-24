import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/logo.png';

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={LOGO} alt="logo hai" className="h-10" />
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/" title="Store">Store</NavLink>
                    <NavLink to="/mac" title="Mac">Mac</NavLink>
                    <NavLink to="/ipad" title="iPad">iPad</NavLink>
                    <NavLink to="/iphone" title="iPhone">iPhone</NavLink>
                    <NavLink to="/watch" title="Watch">Watch</NavLink>
                    <NavLink to="/vision" title="Vision">Vision</NavLink>
                    <NavLink to="/airpods" title="AirPods">AirPods</NavLink>
                    <NavLink to="/tv" title="TV & Home">TV & Home</NavLink>
                    <NavLink to="/entertainment" title="Entertainment">Entertainment</NavLink>
                    <NavLink to="/support" title="Support">Support</NavLink>
                </nav>
            </div>
        </header>
    );
};

// NavLink component for consistent styling and hover effect
const NavLink = ({ to, title }) => {
    return (
        <Link to={to} className="mr-5 hover:text-gray-900 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            {title}
        </Link>
    );
};

export default Navbar;
