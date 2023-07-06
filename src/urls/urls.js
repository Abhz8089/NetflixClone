import { API_KEY } from "../Constants/Constants";
export const trendings = `trending/all/week?api_key=${API_KEY}&language=en-US`;
export const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actions = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horrerMovies = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const actionMovies = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const romanceMovies = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `discover/movie?api_key=${API_KEY}&with_genres=99`;
