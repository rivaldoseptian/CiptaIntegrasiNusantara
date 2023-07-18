import { GIPHY_FETCH_SUCCES } from "../action/actionType";

const initialState = {
  giphys: [],
};

function giphyReducer(state = initialState, action) {
  switch (action.type) {
    case GIPHY_FETCH_SUCCES:
      return {
        ...state,
        giphys: action.payload,
      };
    default:
      return state;
  }
}

export default giphyReducer;
