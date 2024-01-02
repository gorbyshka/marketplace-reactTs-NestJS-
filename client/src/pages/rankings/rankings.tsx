import React, { useState } from 'react'

import {
    RankingContainer,
    RankingText,
    RankingName,
    RankingSmall,
    RankingButton,
    RankingButtons,
    ArtistBlock,
    BlockItems,
    ItemArtist,
    ItemOther,
    OtherBlock,
    TableHeader
} from '../../assets/styles/pages/rankingsStyle.style';

import { MonthColumn } from './monthColumn';
import { TimeColumn } from './timeColumn';
import { TodayColumn } from './todayColumn';
import { WeekColumn } from './weekColumn';

export const Rankings: React.FC = React.memo(() => {

    const [selectedColumn, setSelectedColumn] = useState('today');

    return (

        <RankingContainer>

            <RankingText>

                <RankingName >

                    Top Creators

                </RankingName >

                <RankingSmall>

                    Check out top ranking NFT artists on the NFT Marketplace.

                </RankingSmall>

            </RankingText>

            <RankingButtons>

                <RankingButton
                    onClick={() => setSelectedColumn('today')}
                    selected={selectedColumn === 'today'}
                >

                    Today

                </RankingButton>

                <RankingButton
                    onClick={() => setSelectedColumn('week')}
                    selected={selectedColumn === 'week'}
                >

                    This Week

                </RankingButton>

                <RankingButton
                    onClick={() => setSelectedColumn('month')}
                    selected={selectedColumn === 'month'}
                >

                    This Month

                </RankingButton>

                <RankingButton
                    onClick={() => setSelectedColumn('time')}
                    selected={selectedColumn === 'time'}
                >

                    All Time

                </RankingButton>

            </RankingButtons>

            <TableHeader>

                <BlockItems>

                    <ArtistBlock>

                        <ItemArtist>

                            #

                        </ItemArtist>

                        <ItemArtist>

                            Artist

                        </ItemArtist>

                    </ArtistBlock>

                    <OtherBlock>

                        <ItemOther>

                            Change

                        </ItemOther>

                        <ItemOther>

                            NFTs Sold

                        </ItemOther>

                        <ItemOther>

                            Volume

                        </ItemOther>

                    </OtherBlock>

                </BlockItems>

            </TableHeader>

            {selectedColumn === 'today' && <TodayColumn />}

            {selectedColumn === 'week' && <WeekColumn />}

            {selectedColumn === 'month' && <MonthColumn />}

            {selectedColumn === 'time' && <TimeColumn />}

        </RankingContainer>

    );

});
