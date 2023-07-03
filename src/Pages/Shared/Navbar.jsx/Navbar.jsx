import { Link } from "react-scroll"

const Navbar = () => {

    const navLinks = <>
        <a className="cursor-pointer hover:text-white lg:mr-3 lg:mt-[7px]"><Link to="home" spy={true} smooth={true} offset={-80} duration={500} className="font-semibold hover:text-white">Home</Link></a>
        <li><Link to="skills" spy={true} smooth={true} offset={20} duration={500} className="font-semibold">Skills</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={20} duration={500} className="font-semibold">Projects</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={30} duration={500} className="font-semibold">About</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={20} duration={500} className="font-semibold">Contact</Link></li>
    </>
    return (
        <div className="navbar bg-red-950 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f3004b] rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case lg:text-xl text-md">MOHAMMAD APON</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a href="https://github.com/A2N426" className=" bg-white hover:bg-[#f3004b] hover:text-white text-[#f3004b] px-4 hover:scale-105 duration-100 text-[12px] py-[6px] font-semibold">Github</a>
                <a href="https://www.linkedin.com/in/mohammad-apon-1b0b88243/" className=" bg-white hover:scale-105 duration-100 hover:bg-[#f3004b] hover:text-white font-semibold text-[#f3004b] px-4 text-[12px] py-[6px]">Linkedin</a>
            </div>
        </div>
    );
};

export default Navbar;