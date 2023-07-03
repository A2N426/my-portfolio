import bannerLottie from "../Lottie/banner.json"
import Lottie from "lottie-react"
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import resume from '../../public/Front-End Developer Resume Of Mohammad Apon.pdf'
import { Link } from "react-scroll"
import { BiDownload } from "react-icons/bi"
import { AiOutlineMessage } from "react-icons/ai"

const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="home" className="flex items-center lg:pb-0 pb-5 lg:pt-0 pt-5 lg:pl-0 pl-2 bg-[#1F1F1F]">
            <div data-aos="fade-right" className="w-1/2 mx-auto">
                <h1 className="lg:text-2xl text-xl font-semibold text-white">Hello, I am <br />
                    <span className="text-[#f3004b] lg:text-6xl text-2xl font-bold lg:mt-3">Mohammad Apon</span>
                    <br />
                    <span className="lg:text-6xl text-2xl mt-3">Front-End Developer</span></h1>
                <p className="text-white font-semibold lg:text-lg text-xs lg:mt-5 mb-5">Building beautiful websites with skillful front-end development.</p>
                <div className="flex lg:gap-4 gap-2">
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="bg-[#f3004b] lg:px-3 lg:py-2 lg:text-[15px] text-[10px] cursor-pointer text-white px-4 py-1 font-semibold hover:bg-white hover:text-[#f3004b] hover:scale-105 duration-100 flex items-center lg:gap-2">Hire Me <AiOutlineMessage className="text-xl lg:visible invisible" /></Link>
                    <a href={resume}
                        download="Front-End Developer Resume Of Mohammad Apon.pdf" className="bg-[#f3004b] lg:px-3 cursor-pointer lg:text-[15px] text-[10px] lg:py-2 px-4 py-1 text-white font-semibold hover:bg-white hover:text-[#f3004b] hover:scale-105 duration-100 flex items-center lg:gap-2 ">Download Resume <BiDownload className="text-[23px] lg:visible invisible" /></a>
                </div>
            </div>
            <div data-aos="fade-left" className="lg:w-1/3 w-1/2 mx-auto">
                <Lottie animationData={bannerLottie}></Lottie>
            </div>
        </div>
    );
};

export default Banner;