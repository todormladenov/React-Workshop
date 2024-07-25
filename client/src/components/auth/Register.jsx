import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/authAPI";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const initialValues = {
    email: '',
    password: '',
    'confirm-password': '',
}

export default function Register() {
    const navigator = useNavigate();
    const authContext = useContext(AuthContext);

    const registerHandler = async () => {
        try {
            const user = await register(values.email, values.password);
            authContext.changeAuthState(user);

            navigator('/');
        } catch (error) {
            console.error(error.message) //TODO: Implement error handling.
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" value={values.email} onChange={changeHandler} />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" value={values.password} onChange={changeHandler} />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" value={values['confirm-password']} onChange={changeHandler} />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/auth/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}