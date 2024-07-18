import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to="/games/create-game">Create Game</Link>
                    <Link to="">Logout</Link>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link to="/auth/login">Login</Link>
                    <Link to="/auth/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}