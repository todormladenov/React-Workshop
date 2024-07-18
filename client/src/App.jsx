import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import GamesList from './components/games/GamesList';
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CreateGame from './components/games/CreateGame';
import GameDetails from './components/games/GameDetails';

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/games' element={<GamesList />} />
        <Route path='/games/create-game' element={<CreateGame />} />
        <Route path='/games/:gameId' element={<GameDetails />} />
      </Routes>
    </div >
  )
}

export default App
