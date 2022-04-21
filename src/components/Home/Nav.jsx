// REACT IMPORT
import { useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import  Home from "./Home";
import Our_products from "../Our_products/Our_products";

// IMAGE IMPORTS
import Logo from "../../../images/navbarlogo.png";


export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="w-full flex md:justify-center justify-between items-center p-4">
			<div className="md:flex-[0.5] flex-initial justify-center items-center">
				<img src={Logo} alt="logo" className="w-32 cursor-pointer" />
			</div>

			<ul className="text-white font-rubik md:flex hidden list-none flex-row justify-between items-center flex-initial">
			<li className={`mx-4 cursor-pointer`}><Link to="/">Home</Link></li>
				<li className={`mx-4 cursor-pointer`}><Link to="/our_products">Our product</Link></li>
				<li className={`mx-4 cursor-pointer`}>Our services</li>
				<li className={`mx-4 cursor-pointer`}>About us</li>
				<li className={`mx-4 cursor-pointer`}>Contact us</li>
				
			</ul>
			<div className="flex relative">
				{
					toggleMenu
						? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
						: <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
				}
			</div>
		</nav>

	)
}