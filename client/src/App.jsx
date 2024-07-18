import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import GamesList from './components/games/GamesList';

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path='/games' element={<GamesList />} />
      </Routes>
    </div >
  )
}

export default App
