// REACT IMPORT
import { useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "./Home";
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
				<li className={`mx-4 cursor-pointer`}><Link to="/our_services">Our services(Customers)</Link></li>
				<li className={`mx-4 cursor-pointer`}><Link to="/our_service_freelancer_influencer">Our services(Influencer/Freelancer)</Link></li>
				<li className={`mx-4 cursor-pointer`}><Link to="/about_us">About us</Link></li>
				<li className={`mx-4 cursor-pointer`}><Link to="/contact_us">Contact us</Link></li>

			</ul>
			<div className="flex relative">
				{toggleMenu ?
					<AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
					:
					<HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)
					} />}
				{toggleMenu && (
					<ul
						className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md-hidden list-none
						flex flex-col justify-start items-end rounded-md text-white animate-slide-in
						"
					>
						<li className="text-xl w-full my-2">
							<AiOutlineClose onClick={() => setToggleMenu(false)} />
						</li>
						<li className={`mx-4 cursor-pointer`}><Link to="/">Home</Link></li>
						<li className={`mx-4 cursor-pointer`}><Link to="/our_products">Our product</Link></li>
						<li className={`mx-4 cursor-pointer`}><Link to="/our_services">Our services(Customers)</Link></li>
						<li className={`mx-4 cursor-pointer`}><Link to="/our_service_freelancer_influencer">Our services(Influencer/Freelancer)</Link></li>
						<li className={`mx-4 cursor-pointer`}><Link to="/about_us">About us</Link></li>
						<li className={`mx-4 cursor-pointer`}><Link to="/contact_us">Contact us</Link></li>

					</ul>
				)}
			</div>
		</nav>

	)
}