import styled from "styled-components";

export const RankingContainer = styled.div`

    margin-top: 100px;
    margin-left: 150px;

`;

export const RankingText = styled.div``;

export const RankingName = styled.p`

  font-size: 51px;
  font-style: normal;
  font-weight: 600;

`;

export const RankingSmall = styled.p` font-size: 22px; `;

export const RankingButtons = styled.div`

  display: flex;
  margin-top: 90px;
  justify-content: center;
  gap: 80px;
  margin-right: 400px;

`;

export const RankingButton = styled.button<{ selected: boolean }>`

  width: 200px;
  padding: 10px 20px;
  background-color: transparent;
  color:${(props) => (props.selected ? 'white' : '#858584')};
  border: none;
  border-bottom: ${(props) => (props.selected ? '2px solid white' : 'transparent')};
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 18px;

`;

export const TableHeader = styled.div`

  display: flex;
  width: 1050px;
  height: 46px;
  padding: 12px 0px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--Background---Secondary, #3B3B3B);
  margin-top: 60px;
  justify-content: center;
  
`;

export const BlockItems = styled.div`

  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;

`;

export const ArtistBlock = styled.div`

   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   margin-left: 20px;
  
`;

export const ItemArtist = styled.p`

  margin-right: 40px;
  color: var(--caption-label-text, #858584);

`;

export const ItemOther = styled.p`

  margin-right: 120px;
  color: var(--caption-label-text, #858584);

`;

export const OtherBlock = styled.div`

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right 60px;

`;
