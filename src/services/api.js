import axios from "axios";



const API_KEY = "32fd1bb5";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { s: query, page, apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { i: id, apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
