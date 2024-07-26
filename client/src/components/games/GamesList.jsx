import { useGetAllGames } from "../../hooks/useGames";
import GameListItem from "./GameListItem";

export default function GamesList() {
    const { games } = useGetAllGames();

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length && games.map(game =>
                <GameListItem
                    key={game._id}
                    game={game}
                />)
            }

            {!games.length && <h3 className="no-articles">No articles yet</h3>}

        </section>
    );
}