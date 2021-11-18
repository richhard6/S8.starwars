import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StarshipList from './components/starshipList/StarshipList'
import Starship from './components/starship/Starship'
function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/starships/:name" element={<Starship />}></Route>
        <Route path="/starshiplist" element={<StarshipList />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
