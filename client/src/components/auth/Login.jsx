import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/authAPI";

export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigator = useNavigate();


    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const user = await login(values.email, values.password);
            navigator('/');
        } catch (error) {
            console.error(error.message) //TODO: Implement error handling.
        }
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={loginHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" value={values.email} onChange={changeHandler} />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" value={values.password} onChange={changeHandler} />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/auth/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}