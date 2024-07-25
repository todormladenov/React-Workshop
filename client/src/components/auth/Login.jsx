import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/authAPI";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const initialValues = {
    email: '',
    password: ''
}

export default function Login() {
    const navigator = useNavigate();
    const authState = useContext(AuthContext)

    const loginHandler = async (values) => {
        try {
            const user = await login(values.email, values.password);
            authState.changeAuthState(user)
            navigator('/');
        } catch (error) {
            console.error(error.message) //TODO: Implement error handling.
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

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