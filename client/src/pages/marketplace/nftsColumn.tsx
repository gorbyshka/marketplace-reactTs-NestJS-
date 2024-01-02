import React, { useEffect } from 'react';

import {
    ContainerCards,
    NoResultText
} from '../../assets/styles/pages/marketplaceStyle.style';

import { DiscoverCard } from '../../components/main/discoverNfts/discoverCard';

import { marketItems } from '../../constants/pages/marketItems';

import { NFTsColumnProps } from '../../types/pages/NFTsColumnProps';
import { useDispatch } from 'react-redux';
import { setNumberOfNFTs } from '../../redux/actions/setNumberOfNFTs';

export const NFTsColumn: React.FC<NFTsColumnProps> = React.memo(({ searchInput }) => {
    const dispatch = useDispatch();

    const filteredNFTs = marketItems.filter((nft) => nft.nameCard.toLowerCase().includes(searchInput.toLowerCase()));
    
    useEffect(() => {
       
        dispatch(setNumberOfNFTs(filteredNFTs.length));
      }, [dispatch, filteredNFTs.length]);

    return (

        <ContainerCards>

            {filteredNFTs.length === 0 ? (

                <NoResultText>

                    No result

                </NoResultText>

            ) : (

                filteredNFTs.map((item, index) => (

                    <DiscoverCard
                        key={index}
                        backgroundSrc={item.backgroundSrc}
                        nameCard={item.nameCard}
                        ownerIcon={item.ownerIcon}
                        ownerName={item.ownerName}
                    />

                ))
            )}

        </ContainerCards>

    );

});
