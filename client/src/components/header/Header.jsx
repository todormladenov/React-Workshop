import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const authContext = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                {
                    authContext.isAuth
                        ?
                        (<div id="user">
                            <Link to="/games/create-game">Create Game</Link>
                            <Link to="">Logout</Link>
                        </div>)
                        :
                        (<div id="guest">
                            <Link to="/auth/login">Login</Link>
                            <Link to="/auth/register">Register</Link>
                        </div>)
                }
            </nav>
        </header>
    );
}