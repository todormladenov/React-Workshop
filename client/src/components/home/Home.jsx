import { useEffect, useState } from "react";
import { getMostRecentGames } from "../../api/gamesAPI";
import GameLatestItem from "../games/GameLatestItem";

export default function Home() {
    let [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const newGames = await getMostRecentGames();
            setGames(newGames);
        })()
    }, []);

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

                {/* <!-- Display paragraph: If there is no games  --> */}
                <p className="no-articles">No games yet</p>
            </div>
        </section>
    );
}