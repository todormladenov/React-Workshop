import { get } from "./api"

const baseURL = 'http://localhost:3030/data/games'

export const getAllGames = async () => get(baseURL);