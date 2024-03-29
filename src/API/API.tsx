
   
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchFilmData = async (searchField: string) => {
  try {
    const {
      data: { Search },
    } = await axios.get(
      `http://www.omdbapi.com/?s=${searchField}&apikey=${API_KEY}`
    );
    return Search;
  } catch (error) {
    return error;
  }
};