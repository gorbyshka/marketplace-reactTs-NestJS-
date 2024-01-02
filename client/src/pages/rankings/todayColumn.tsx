import React from 'react'

import { Column } from './column';

import { columnItem } from '../../constants/pages/columnItem';

export const TodayColumn: React.FC = React.memo(() => {

    const today = new Date();
    const formattedDate = `${today.getUTCDate()}.${today.getUTCMonth() + 1}.${today.getUTCFullYear()}`;

    return (

        <>

            {columnItem.map((item, index) => (

                <React.Fragment key={index}>

                    {formattedDate === item.cardData.replace(/-/g, '.') ? (
                        
                        <Column
                            num={item.id}
                            cardSrc={item.cardSrc}
                            cardName={item.cardName}
                            cardChange={item.cardChange}
                            cardSold={item.cardSold}
                            cardVolume={item.cardVolume}
                        />

                    ) : null}

                </React.Fragment>

            ))}

        </>

    );

});
