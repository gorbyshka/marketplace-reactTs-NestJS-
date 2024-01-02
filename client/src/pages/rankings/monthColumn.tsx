import React from 'react'
import { columnItem } from '../../constants/pages/columnItem';
import { Column } from './column';

export const MonthColumn: React.FC = React.memo(() => {

    const today = new Date();
    const currentMonth = today.getUTCMonth() + 1; 
     
    return (
      <>
        {columnItem.map((item, index) => (
          <React.Fragment key={index}>
            {currentMonth === parseInt(item.cardData.split('.')[1], 10) ? (
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
