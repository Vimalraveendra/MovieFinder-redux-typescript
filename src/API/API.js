import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchFilmData = async (searchField) => {
  try {
    const {
      data: { Search },
    } = await axios.get(
      `http://www.omdbapi.com/?s=${searchField}&apikey=${API_KEY}`
    );
    return Search;
  } catch (error) {
    console.log("error", error);
  }
};
