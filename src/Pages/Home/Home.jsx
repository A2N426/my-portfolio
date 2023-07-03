import About from "../../components/About";
import Banner from "../../components/BannerLottie";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar.jsx/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Skills />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;