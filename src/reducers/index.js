import { combineReducers } from "redux";
import gamesReducer from './gamesReducer';
import detailReducer from "./gamesReducer";
const rootReducer = combineReducers({
 games: gamesReducer,
 screen: detailReducer,
});

export default rootReducer;