import React from 'react'

import { Column } from './column';

import { columnItem } from '../../constants/pages/columnItem'

export const TimeColumn: React.FC = React.memo(() => {

    return (

        <>

            {columnItem.map((item, index) => (

                <Column
                    key={index}
                    num={item.id}
                    cardSrc={item.cardSrc}
                    cardName={item.cardName}
                    cardChange={item.cardChange}
                    cardSold={item.cardSold}
                    cardVolume={item.cardVolume}
                />

            ))}

        </>

    );
    
});
