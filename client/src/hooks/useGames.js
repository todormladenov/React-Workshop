import { useEffect, useState } from "react";
import { getAllGames, getMostRecentGames, getGameById } from "../api/gamesAPI";

export const useGetAllGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const newGames = await getAllGames();
            setGames(newGames);
        })()
    }, []);

    return {
        games,
        setGames
    }
}

export const useGetMostRecentGames = () => {
    let [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const newGames = await getMostRecentGames();
            setGames(newGames);
        })()
    }, []);

    return {
        games,
        setGames
    }

}

export const useGetOneGames = (gameId) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
            const game = await getGameById(gameId);

            setGame(game);
        })()
    }, [gameId]);

    return {
        game,
        setGame
    }
}