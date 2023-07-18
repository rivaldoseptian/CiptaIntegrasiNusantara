import axios from "axios";
import dotenv from "dotenv";
import { GIPHY_FETCH_SUCCES } from "./actionType";

export const fetchGiphy = (payload) => {
  return {
    type: GIPHY_FETCH_SUCCES,
    payload,
  };
};

export const handleSearch = (query) => {
  return async (dispatch, getstate) => {
    try {
      let url;
      if (query === "") {
        url = `https://api.giphy.com/v1/gifs/trending?api_key=Wo1JkLhH9dEUGTwdAZZgAJrU7lGFHOkB&limit=9&offset=0&rating=g&bundle=messaging_non_clips`;
      } else {
        url = `https://api.giphy.com/v1/gifs/search?api_key=Wo1JkLhH9dEUGTwdAZZgAJrU7lGFHOkB&q=${query}&limit=9&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
      }

      //   const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`;
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      const action = fetchGiphy(data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};

export const Ironmanfetch = () => {
  return async (dispatch, getstate) => {
    try {
      let url = `https://api.giphy.com/v1/gifs/search?api_key=Wo1JkLhH9dEUGTwdAZZgAJrU7lGFHOkB&q=ironman&limit=9&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      const action = fetchGiphy(data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};
