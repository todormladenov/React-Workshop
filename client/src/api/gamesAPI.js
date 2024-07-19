
const baseURL = 'http://localhost:3030/data/games'

export const getAllGames = async () => get(baseURL);
export const getMostRecentGames = async () => get(baseURL + '?sortBy=_createdOn%20desc&distinct=category')
export const getGameById = async (gameId) => get(`${baseURL}/${gameId}`);
