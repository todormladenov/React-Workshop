import { useEffect, useState } from "react";
import { getAllGames, getMostRecentGames } from "../api/gamesAPI";

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