import { setNumberOfNFTs } from "../actions/setNumberOfNFTs";

type ActionTypes = ReturnType<typeof setNumberOfNFTs>;

const initialState = 0; 

export const numberOfNFTsReducer = (state: number =  initialState, action: ActionTypes): number => {
    switch (action.type) {
      case 'SET_NUMBER_OF_NFTS':
        console.log('Reducer: SET_NUMBER_OF_NFTS', action.payload);
        return action.payload;
      default:
        return state;
    }
  };
