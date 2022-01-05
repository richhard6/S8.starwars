import Home from './components/home/Home'

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StarshipList from './components/starshipList/StarshipList'
import StarshipDetail from './components/starshipDetail/StarshipDetail'

function App() {
  const [starships, setStarships] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then((data) => data.json())
      .then((starships) => setStarships(starships))
  }, [])

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/?page=${page}`)
      .then((data) => data.json())
      .then((starships) =>
        setStarships((prevStarships) => {
          return { ...prevStarships, ...starships }
        })
      )
  }, [page])

  console.log(starships)
  return (
    <Router>
      <Routes>
        <Route path="/starships/:name" element={<StarshipDetail />}></Route>
        <Route
          path="/starshiplist"
          element={
            <StarshipList starships={starships} setPage={setPage} page={page} />
          }
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
