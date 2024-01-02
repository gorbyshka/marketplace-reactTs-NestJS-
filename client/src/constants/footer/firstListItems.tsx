import {
    RxDiscordLogo,
    RxTwitterLogo,
    RxInstagramLogo
} from 'react-icons/rx';

import { PiYoutubeLogo } from 'react-icons/pi';

export const firstListItems = [

    {

        link: "/",
        logoSrc: require('../../assets/icons/logo.svg').default,

    },

    {

        link: "#",
        text: "NFT marketplace UI created with Anima for Figma.",

    },

    {

        link: "#",
        text: "Join our community",

    },

    {

        socialNetworks: [

            {

                link: "#",
                icon: <RxDiscordLogo style={{ height: '32px', width: '32px' }} />

            },

            {

                link: "#",
                icon: <PiYoutubeLogo style={{ height: '32px', width: '32px' }} />

            },

            {

                link: "#",
                icon: <RxTwitterLogo style={{ height: '32px', width: '32px' }} />

            },

            {

                link: "#",
                icon: <RxInstagramLogo style={{ height: '32px', width: '32px' }} />

            },

        ],

    },

];
