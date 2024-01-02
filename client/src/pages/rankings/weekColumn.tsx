import React from 'react';
import { columnItem } from '../../constants/pages/columnItem';
import { Column } from './column';

export const WeekColumn: React.FC = React.memo(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); 

      return (
        <>
            {columnItem.map((item, index) => {
                console.log('Item Data:', item.cardData);

                // Разделяем строку с датой на день, месяц и год
                const [day, month, year] = item.cardData.split('.');

                // Создаем новую дату с правильными аргументами
                const itemDate = new Date(`${year}-${month}-${day}`);

                console.log('Parsed Item Date:', itemDate);

                return (
                    <React.Fragment key={index}>
                        {isSameWeek(today, itemDate) ? (
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
                );
            })}
        </>
    );
});


// Функция для проверки, находится ли две даты в одной неделе
function isSameWeek(date1: Date, date2: Date): boolean {
    const oneDay = 24 * 60 * 60 * 1000; // Один день в миллисекундах
    const diffDays = Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
    const daysInWeek = 7;

    return diffDays < daysInWeek;
}
