import { INavigationList } from "src/types/navigation";
import ProfileImg from '@assets/images/profiles-picture.jpg';

export const NAVIGATE: INavigationList = [
    {
        name: "Home",
        href: "banner",
    },
    {
        name: "Experience",
        href: "experience",
    },
    {
        name: "About",
        href: "about-us",
    },
    {
        name: "Profile",
        image: ProfileImg,
        href: ""
    },
    {
        name: "Projects",
        href: "projects",
    },
    {
        name: "Skills",
        href: "skills",
    },
    {
        name: "Contact",
        href: "contact",
    },
]