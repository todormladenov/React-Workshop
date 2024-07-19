import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../api/gamesAPI";

export default function EditGame() {
    const { gameId } = useParams();
    let [formValues, setFormValues] = useState({
        "title": "",
        "category": "",
        "maxLevel": "",
        "imageUrl": "",
        "summary": "",
    });

    const onChangeHandler = (e) => {
        setFormValues(oldValues => (
            {
                ...oldValues,
                [e.target.name]: e.target.value
            }
        ))
    }

    useEffect(() => {
        (async () => {
            const game = await getGameById(gameId);
            setFormValues(game);
        })();
    }, [])

    return (
        <section id="edit-page" class="auth">
            <form id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" onChange={onChangeHandler} value={formValues.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" onChange={onChangeHandler} value={formValues.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" onChange={onChangeHandler} value={formValues.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" onChange={onChangeHandler} value={formValues.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" onChange={onChangeHandler} value={formValues.summary}></textarea>
                    <input class="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}