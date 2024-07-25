import { del, get, post, put } from "./api"

const baseURL = 'http://localhost:3030/data/games'

export const getAllGames = () => get(baseURL);
export const getMostRecentGames = () => get(baseURL + '?sortBy=_createdOn%20desc&pageSize=3')
export const getGameById = (gameId) => get(`${baseURL}/${gameId}`);
export const createGame = (gameData) => post(baseURL, gameData);
export const editGame = (gameId, gameData) => put(`${baseURL}/${gameId}`, gameData);
export const deleteGame = (gameId) => del(`${baseURL}/${gameId}`);