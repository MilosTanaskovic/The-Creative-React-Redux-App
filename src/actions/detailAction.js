import axios from 'axios';
import { detailGameURL,  screenShotsURL} from "../api";

// Action 
export const loadDetail = () => async (dispatch) => {
 const detailData = await axios.get(detailGameURL(id));
 const screenData = await axios.get(screenShotsURL(id));

 dispatch({
  type: "GET_DETAIL",
  payload: {
   game: detailData.data,
   screen: screenData.data
  }
 })
}