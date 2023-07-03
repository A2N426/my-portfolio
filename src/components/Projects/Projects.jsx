import Projects1 from "./Projects1";
import Projects2 from "./Projects2";
import Projects3 from "./Projects3";


const Projects = () => {
    return (
        <div id="projects" className="bg-[#171717] pt-10 lg:px-24 px-6 lg:pt-20">
            <h1 className="font-semibold text-[#f3004b]">Exclusive Something</h1>
            <h1 className="text-white text-4xl font-semibold">PROJECTS</h1>
            <Projects1 />
            <Projects2 />
            <Projects3 />
            <div className="text-center pb-5">
                <a href="https://github.com/A2N426?tab=repositories" className="px-5 py-2 bg-[#f3004b] text-white font-semibold hover:bg-white hover:text-[#f3004b]">See More</a>
            </div>
        </div>
    );
};

export default Projects;