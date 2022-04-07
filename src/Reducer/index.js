import { combineReducers } from 'redux';
import { PlayerReducer } from './PlayerReducer'


 const reducers = combineReducers({
    allPlayers:  PlayerReducer,
  });

  export default reducers;