
import { useGetMostRecentGames } from "../../hooks/useGames";
import GameLatestItem from "../games/GameLatestItem";

export default function Home() {
    const { games } = useGetMostRecentGames();

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {games.map(game => <GameLatestItem key={game._id} game={game} />)}

                {!games.length && <p className="no-articles">No games yet</p>}
            </div>
        </section>
    );
}