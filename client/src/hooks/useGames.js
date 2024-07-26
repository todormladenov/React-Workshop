import { useEffect, useState } from "react";
import { getAllGames } from "../api/gamesAPI";

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