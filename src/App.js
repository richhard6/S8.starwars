import Home from './components/home/Home'

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StarshipList from './components/starshipList/StarshipList'
import StarshipDetail from './components/starshipDetail/StarshipDetail'
function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then((data) => data.json())
      .then((starships) => setStarships(starships))
  }, [])

  console.log(starships)
  return (
    <Router>
      <Routes>
        <Route path="/starships/:name" element={<StarshipDetail />}></Route>
        <Route
          path="/starshiplist"
          element={<StarshipList starships={starships} />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
