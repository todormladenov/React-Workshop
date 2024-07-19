import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGameById } from "../../api/gamesAPI";

export default function GameDetails() {
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);

    const { gameId } = useParams();

    useEffect(() => {
        (async () => {
            const game = await getGameById(gameId);
            
            setGame(game);
        })()
    }, []);

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}y</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(comment =>
                            <li key={comment._id} className="comment">
                                <p>Content: {comment.comment}</p>
                            </li>
                        )}
                    </ul>

                    {!comments.length && <p className="no-comment">No comments.</p>}

                </div>

                <div className="buttons">
                    <Link to={`/games/${game._id}/edit`} className="button">Edit</Link>
                    <button className="button">Delete</button>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}