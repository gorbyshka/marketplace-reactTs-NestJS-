import React from "react";

import { DigitalArt } from "./digitalArt/digitalArt";
import { TopCreators } from "./topCreators/topCreators";
import { TrendingCollection } from "./trendingCollection/trendingCollection";
import { BrowseCategories } from "./browseCategories/browseCategories";
import { DiscoverNfts } from "./discoverNfts/discoverNfts";
import { MagicMashrooms } from "./magicMashrooms/magicMashrooms";
import { HowItWorks } from "./howItWorks/howItWorks";
import { JoinOurWeekly } from "./joinOurWeekly/joinOurWeekly";

export const Main: React.FC = React.memo(() => {

    return (

        <>

            <DigitalArt />
            <TrendingCollection />
            <TopCreators />
            <BrowseCategories />
            <DiscoverNfts />
            <MagicMashrooms />
            <HowItWorks />
            <JoinOurWeekly />

        </>

    );

});
