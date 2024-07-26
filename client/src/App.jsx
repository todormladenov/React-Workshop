import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import GamesList from './components/games/GamesList';
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CreateGame from './components/games/CreateGame';
import GameDetails from './components/games/GameDetails';
import EditGame from './components/games/EditGame';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const [authState, setAuthState] = useState({})

  const changeAuthState = (state) => {
    if (state.accessToken) { 
      sessionStorage.setItem('accessToken', state.accessToken);
    } else {
      sessionStorage.clear();
    }

    setAuthState(state);
  }

  const contextData = {
    email: authState.email,
    accessToken: authState.accessToken,
    isAuth: !!authState.accessToken,
    userId: authState._id,
    changeAuthState,
  }

  return (
    <AuthContext.Provider value={contextData} >
      <div id="box">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/games' element={<GamesList />} />
          <Route path='/games/create-game' element={<CreateGame />} />
          <Route path='/games/:gameId' element={<GameDetails />} />
          <Route path='/games/:gameId/edit' element={<EditGame />} />
        </Routes>
      </div >
    </AuthContext.Provider >
  )
}

export default App
