import { CardItemType } from "../../types/main/trendType";

export const cardItem: CardItemType[] = [

    {

        id: 1,
        srcPhotoMain: require('../../assets/icons/dog.svg').default,
        srcPhotoFirst: require('../../assets/icons/fox.svg').default,
        srcPhotoSecond: require('../../assets/icons/bear.svg').default,
        alt: "Dog",
        name: "DSGN Animals",
        srcIcon: require('../../assets/icons/mrFox.svg').default,
        owner: "MrFox",

    },

    {

        id: 2,
        srcPhotoMain: require('../../assets/icons/mushroom1.svg').default,
        srcPhotoFirst: require('../../assets/icons/mushroom2.svg').default,
        srcPhotoSecond: require('../../assets/icons/mushroom3.svg').default,
        alt: "Mushroom",
        name: "Magic Mushrooms",
        srcIcon: require('../../assets/icons/shroomie.svg').default,
        owner: "Shroomie",

    },

    {

        id: 3,
        srcPhotoMain: require('../../assets/icons/pearson1.svg').default,
        srcPhotoFirst: require('../../assets/icons/pearson2.svg').default,
        srcPhotoSecond: require('../../assets/icons/pearson3.svg').default,
        alt: "Pearson",
        name: "Disco Machines",
        srcIcon: require('../../assets/icons/beKind.svg').default,
        owner: "BeKind2Robots",

    },

]
