import axios from 'axios';
import { popularGameURL, upcomingGameURL, newGameURL } from '../api';

// ACTION CREATOR

export const loadGame = () => async (dispatch) => {
 //FETCH AXIOS
 const popularData = await axios.get(popularGameURL());
 const upcomingData = await axios.get(upcomingGameURL());
 const newData = await axios.get(newGameURL());
 dispatch({
  type: "FETCH_GAMES",
  payload: {
   popular: popularData.data.results,
   upcoming: upcomingData.data.results,
   newGames: newData.data.results,
  }
 });
};