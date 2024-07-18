import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import GamesList from './components/games/GamesList';
import Home from './components/home/Home';

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<GamesList />} />
      </Routes>
    </div >
  )
}

export default App
