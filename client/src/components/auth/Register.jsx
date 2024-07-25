import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/authAPI";
import { useState } from "react";

export default function Register() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        'confirm-password': '',
    });
    const navigator = useNavigate();


    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }

    const registerHandler = async (e) => {
        e.preventDefault();

        try {
            const user = await register(values.email, values.password);
            navigator('/');
        } catch (error) {
            console.error(error.message) //TODO: Implement error handling.
        }
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={registerHandler}>
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