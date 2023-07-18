import { combineReducers } from "redux";
import giphyReducer from "./giphy";

const rootReducer = combineReducers({
  giphy: giphyReducer,
});

export default rootReducer;
