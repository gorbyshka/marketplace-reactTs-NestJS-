import React, { useState } from 'react';

import {
    MarketContainer,
    TextContainer,
    Name,
    NameSmall,
    InputBlock,
    MarketInput,
    ToggleButtons,
    ToggleButton,
    CircularCounter
} from '../../assets/styles/pages/marketplaceStyle.style';

import { BsSearch } from "react-icons/bs";

import { CollectionsColumn } from './collectionsColumn';

import { NFTsColumn } from './nftsColumn';

import { useSelector } from 'react-redux';

import { selectNumberOfNFTs } from '../../redux/reducers/selectNumberOfNfts';

export const Marketplace: React.FC = React.memo(() => {

    const [searchInput, setSearchInput] = useState('');

    const [selectedColumn, setSelectedColumn] = useState('nfts');

    const numberOfNFTs = useSelector(selectNumberOfNFTs || 0);

    return (

        <MarketContainer>

            <TextContainer >

                <Name >

                    Browse Marketplace

                </Name >

                <NameSmall>

                    Browse through more than 50k NFTs on the NFT Marketplace.

                </NameSmall>

                <InputBlock >

                    <MarketInput
                        type="text"
                        placeholder="Search your favourite NFTs"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />

                    <BsSearch
                        style={{ color: 'white' }}
                    />

                </InputBlock>

            </TextContainer>

            <ToggleButtons>

                <ToggleButton
                    onClick={() => setSelectedColumn('nfts')}
                    selected={selectedColumn === 'nfts'}
                >

                    NFTs

                    <CircularCounter>

                        {numberOfNFTs}
                        
                    </CircularCounter>

                </ToggleButton>

                <ToggleButton
                    onClick={() => setSelectedColumn('collections')}
                    selected={selectedColumn === 'collections'}
                >

                    Collections

                </ToggleButton>

            </ToggleButtons>

            {selectedColumn === 'nfts' && <NFTsColumn searchInput={searchInput} />}

            {selectedColumn === 'collections' && <CollectionsColumn />}

        </MarketContainer>

    );

});
