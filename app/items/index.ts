import mclaren1 from '@/assets/mclaren1.jpg';
import { StaticImageData } from 'next/image';
import { colors } from '../colors';

type labelType = { 
    text: string,
    color?: string,
    backgroundColor: string, 
}

export type itemProps = { 
    title: string;
    labels: labelType[];
    description: string;
    price: number;
    images: string[] | StaticImageData[];
    obs?: string | JSX.Element;
}

export const items: itemProps[] = [
    {
        title: 'Mclaren MP4-6',
        labels: [{text: 'autoral', backgroundColor: colors.green}],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`,
        price: 679,
        images: [mclaren1],
    }
]