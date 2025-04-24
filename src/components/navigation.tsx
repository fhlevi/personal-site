import '@styles/navigation.css';
import ProfileImg from '@assets/images/profiles-picture.jpg';
import { useNavigation } from '@hook/use-navigation';
import { NavigationItems } from './navigation-items';

export const Navigation = () => {
    const { navigationList } = useNavigation();

    return (
        <header className="flex items-center justify-center w-full sticky top-0 z-50">
            <nav className="text-white mt-10 h-20 nav">
                <ul className="flex justify-between items-center p-2.5 h-full">
                    <NavigationItems items={navigationList?.[0]} />
                    <li className="text-2xl">
                        <img src={ProfileImg} alt="avatar" className="avatar" />
                    </li>
                    <NavigationItems items={navigationList?.[1]} />
                </ul>
            </nav>
        </header>
    );
};
