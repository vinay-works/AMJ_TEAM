import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Navigation {
    name: string;
    path: string;
    subServices?: SubService[];
}

interface SubService {
    name: string;
    path: string;
}

const navigations: Navigation[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Services',
        path: '/services',
        subServices: [
            {
                name: 'Service 1',
                path: '/service1',
            },
            {
                name: 'Service 2',
                path: '/service2',
            },
        ],
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
    {
        name: 'Blog',
        path: '/blog',
    },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (name: string, event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <div className="flex justify-between items-center px-4 py-2">
                <div className="mr-4"> 
                    <Link to={'/'}>
                        <img
                            src="path_to_your_logo_image"  
                            alt="Logo"
                            className="h-10"
                        />
                    </Link>
                </div>
                <div className="hidden md:flex flex-grow justify-center items-center">
                    {navigations.map((navigation) => (
                        <div key={navigation.name} className="relative">
                            {navigation.subServices ? (
                                <div
                                    onClick={(e) => toggleDropdown(navigation.name, e)}
                                    className="mx-4 hover:text-orange relative group"
                                >
                                    <span className="flex items-center">
                                        {navigation.name}
                                        {navigation.name === 'Services' && (
                                            <RiArrowDropDownLine className="ml-1" />
                                        )}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
                                </div>
                            ) : (
                                <Link
                                    to={navigation.path}
                                    className="mx-4 hover:text-orange relative group"
                                >
                                    {navigation.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform transform scale-x-0 group-hover:scale-x-100"></span>
                                </Link>
                            )}
                            {navigation.subServices && openDropdown === navigation.name && (
                                <div className="absolute top-full mt-1 w-48 bg-white border border-gray-200 shadow-md rounded">
                                    {navigation.subServices.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.path}
                                            className="block px-4 py-2 hover:bg-gray-100"
                                            onClick={closeMenu}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    {/* Let's Connect button on desktop */}
                    <button className="ml-8 hidden md:inline-block bg-orange hover:bg-blue-600 text-white px-5 py-2 rounded">
                        Let's Connect
                    </button>
                </div>
                <div className="md:hidden">
                    <CiMenuFries className="text-3xl cursor-pointer" onClick={toggleMenu} />
                </div>
            </div>
{/* Mobile Menu */}
{isOpen && (
    <div className="md:hidden">
        <div className="flex flex-col items-center">
            {navigations.map((navigation) => (
                <div key={navigation.name} className="relative">
                    {navigation.subServices ? (
                        <div
                            onClick={(e) => toggleDropdown(navigation.name, e)}
                            className="my-2 "
                        >
                            <span className="flex items-center">
                                {navigation.name}
                                {navigation.name === 'Services' && (
                                    <RiArrowDropDownLine className="ml-1" />
                                )}
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 "></span>
                        </div>
                    ) : (
                        <Link
                            to={navigation.path}
                            className="my-2 "
                            onClick={toggleMenu}
                        >
                            {navigation.name}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 "></span>
                        </Link>
                    )}
                    {navigation.subServices && openDropdown === navigation.name && (
                        <div className="absolute top-full mt-1 w-48 bg-white border border-gray-200 shadow-md rounded z-10">
                            {/* Adjusted top property to ensure dropdown appears below navigation items */}
                            {navigation.subServices.map((service) => (
                                <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={toggleMenu}
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            {/* Let's Connect button in mobile menu */}
            <button
                className="bg-orange hover:bg-blue-600 text-white px-5 py-2 rounded my-2"
                onClick={toggleMenu}
            >
                Let's Connect
            </button>
        </div>
    </div>
)}

        </header>
    );
};

export default Header;
