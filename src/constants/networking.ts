import { faLinkedin, faGithubSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { SocialNetworkList } from 'src/types/social-network';
import { v4 as uuidv4 } from 'uuid';

export const SOCIAL_NETWORK: SocialNetworkList = [
    {
        id: uuidv4(),
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/fhlevi'
    },
    {
        id: uuidv4(),
        icon: faGithubSquare,
        link: 'https://github.com/fhlevi'
    },
    {
        id: uuidv4(),
        icon: faWhatsappSquare,
        link: 'https://wa.me/6285156589457?text=Hi! Faisal, I want to ask you about your portfolio'
    }
]