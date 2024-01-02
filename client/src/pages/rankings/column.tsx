import React from 'react'
import styled from 'styled-components';

interface ColumnType {

    num: number;
    cardSrc: string;
    cardName: string;
    cardChange: string;
    cardSold: string;
    cardVolume: string;

}

export const Column: React.FC<ColumnType> = React.memo((
    {
        num, cardSrc, cardName, cardChange, cardSold, cardVolume
    }) => {

    return (
      
        <ColumnContainer>

            <ColumnBlock>

                <ItemsStart>

                    <NumberCard>

                        <Number>

                            {num}

                        </Number>

                    </NumberCard>

                    <IconBlock>

                        <ColumnImg src={cardSrc} alt={cardName} />

                    </IconBlock>

                    <ColumnName>

                        <NameTitle >

                            {cardName}

                        </NameTitle >

                    </ColumnName>

                </ItemsStart>

                <ItemsEnd >

                    <ChangeBlock>

                        <ChangeText >

                            {cardChange}

                        </ChangeText >

                    </ChangeBlock>

                    <SoldBlock>

                        <ColumnText >

                            {cardSold}

                        </ColumnText>

                    </SoldBlock>

                    <VolumeBlock >

                        <ColumnText >

                            {cardVolume}

                        </ColumnText >

                    </VolumeBlock >

                </ItemsEnd>

            </ColumnBlock>

        </ColumnContainer>
    );

});

export const ColumnContainer = styled.div`
  width: 1050px;
  padding: 12px 0px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(--Background---Secondary, #3B3B3B);
  margin-top: 30px;
`;

export const ColumnBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemsStart = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 25px;
`;

export const ItemsEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 140px;
  margin-right: 120px;
`;

export const NumberCard = styled.div`
  display: flex;
  top: 20px; 
  left: 20px; 
  height: 30px;
  width: 30px;
  gap: 10px;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  background: var(--Background, #2B2B2B);
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
`;

export const Number = styled.p`
  color: var(--caption-label-text, #858584);
`;

export const IconBlock = styled.div`
  flex-shrink: 0;
`;

export const ColumnImg = styled.img`
    height: 64px;
    width: 64px;
`;

export const ColumnName = styled.div`
  flex-shrink: 1;
`;

export const NameTitle = styled.h1`
  font-size: 22px;
  color: white;
`;

export const ChangeBlock = styled.div`
  flex-shrink: 0;
`;

export const SoldBlock = styled.div`
  flex-shrink: 0;
`;

export const VolumeBlock = styled.div`
  flex-shrink: 0;
`;

export const ColumnText = styled.p`color: white;`;

export const ChangeText = styled.p`color: green;`;
