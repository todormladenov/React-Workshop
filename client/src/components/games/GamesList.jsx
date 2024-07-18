import { useEffect, useState } from "react";
import { getAllGames } from "../../api/gamesAPI";
import GameItem from "./GameItem";

export default function GamesList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const newGames = await getAllGames();
            setGames(newGames);
        })()
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
                {games.length && games.map(game =>
                    <GameItem
                        key={game._id}
                        game={game}
                    />)
                }

                {!games.length && <h3 className="no-articles">No articles yet</h3>}
            
        </section>
    );
}