import { productPictures } from './pictures';
import { colors } from '../colors';
import { StaticImageData } from 'next/image';

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
        labels: [
            {text: 'autoral', backgroundColor: colors.green},
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`,
        price: 679,
        images: productPictures.mclaren,
    }, {
        title: 'Arara Canindé',
        labels: [
            {text: 'autoral', backgroundColor: colors.green},
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`,
        price: 120,
        images: productPictures.macaw,
    }, {
        title: 'Conjunto City',
        labels: [
            {text: 'combo', backgroundColor: colors.darkGrey},
            {text: 'manual', backgroundColor: colors.purple},
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`,
        price: 129,
        images: productPictures.city,
    }, {
        title: 'Conjunto Speed Champions',
        labels: [
            {text: 'combo', backgroundColor: colors.darkGrey},
            {text: 'manual', backgroundColor: colors.purple},
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`,
        price: 199,
        images: productPictures.speed,
    }, {
        title: 'Nitro Muscle',
        labels: [
            {text: 'conjunto', backgroundColor: colors.blue},
            {text: 'completo', backgroundColor: colors.clickBlue},
            {text: 'raro', backgroundColor: colors.red}
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`,
        price: 219,
        images: productPictures.nitro,
    }, {
        title: 'NASA Apollo Saturn V',
        labels: [
            {text: 'conjunto', backgroundColor: colors.blue},
            {text: 'caixa', backgroundColor: colors.red},
            {text: 'manual', backgroundColor: colors.purple},
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`,
        price: 1069,
        images: productPictures.saturn,
    }, {
        title: 'Mindstorms EV3',
        labels: [
            {text: 'conjunto', backgroundColor: colors.blue},
            {text: 'extras', backgroundColor: colors.pink},
        ],
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.`,
        price: 1399,
        images: productPictures.mindstorms,
    }
]

