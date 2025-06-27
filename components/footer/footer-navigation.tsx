import { Link } from "react-scroll";

export const FooterNavigation = () => {
    return (
        <div className="space-y-4 lg:space-y-7 mb-7 lg:mb-0">
            <div className="text-xl font-semibold text-orange-400">Navigation</div>
            <div className="flex flex-col space-y-2 lg:space-y-5 text-base text-white">
                <Link to="banner" offset={-100} className="cursor-pointer">
                    Home
                </Link>
                <Link to="experience" offset={-100} className="cursor-pointer">
                    Experience
                </Link>
                <Link to="about-us" offset={-100} className="cursor-pointer">
                    About
                </Link>
                <Link to="projects" offset={-100} className="cursor-pointer">
                    Projects
                </Link>
                <Link to="skills" offset={-100} className="cursor-pointer">
                    Skills
                </Link>
            </div>
        </div>
    );
};