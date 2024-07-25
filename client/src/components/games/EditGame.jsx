import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editGame, getGameById } from "../../api/gamesAPI";
import { useForm } from "../../hooks/useForm";

const initialValues = {
    "title": "",
    "category": "",
    "maxLevel": "",
    "imageUrl": "",
    "summary": "",
}

export default function EditGame() {
    const { gameId } = useParams();
    const navigator = useNavigate();

    const editHandler = async (values) => {
        try {
            await editGame(gameId, values);
            navigator(`/games/${gameId}`);
        } catch (error) {
            console.error(error);
        }
    }

    const { values, changeHandler, submitHandler, setValues } = useForm(initialValues, editHandler);

    useEffect(() => {
        (async () => {
            const game = await getGameById(gameId);
            setValues(game);
        })();
    }, [])

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" onChange={changeHandler} value={values.title} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" onChange={changeHandler} value={values.category} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" onChange={changeHandler} value={values.maxLevel} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" onChange={changeHandler} value={values.imageUrl} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" onChange={changeHandler} value={values.summary}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}