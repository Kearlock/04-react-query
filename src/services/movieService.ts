import axios from "axios";
import type { Movie } from "../types/movie.ts";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export interface SearchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<SearchMoviesResponse>(BASE_URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  console.log(response.data.results);
  return response.data.results;
}
