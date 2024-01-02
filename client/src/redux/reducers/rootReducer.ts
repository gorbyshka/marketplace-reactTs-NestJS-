import { combineReducers } from 'redux';
import { numberOfNFTsReducer } from './numberOfNFTs';

const rootReducer = combineReducers({
  
  numberOfNFTs: numberOfNFTsReducer,
  
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
