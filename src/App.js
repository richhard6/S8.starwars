import Home from './components/home/Home'

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StarshipList from './components/starshipList/StarshipList'
import StarshipDetail from './components/starshipDetail/StarshipDetail'
import Login from './components/login/Login'
import CreateAccount from './components/createAccount/CreateAccount'
import { Theme } from './styles'
import { useUser } from './hooks/useUser'
import { useNavigate } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'

function App() {
  const [starships, setStarships] = useState([])
  const [page, setPage] = useState(0)

  //FALTA MOSTRAR LOS ACTORES Y LAS PELIS EN LAS QUE HAN SALIDO ESAS NAVES
  //CREANDAO NUEVO COMPKNENTE REEUTILIZABOE
  //UNITN TEST Y DONE

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then((data) => data.json())
      .then((starships) => setStarships(starships))
  }, [])

  useEffect(() => {
    if (page > 1) {
      fetch(`https://swapi.dev/api/starships/?page=${page}`)
        .then((data) => data.json())
        .then((starships) => {
          setLoading(false)
          if (starships.results)
            setStarships((prevStar) => ({
              ...prevStar,
              results: [...prevStar.results, ...starships.results],
            }))
        })
    }

    if (page > 4) return
  }, [page])

  return (
    <Theme>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/starships/:name" element={<StarshipDetail />}></Route>
          <Route
            path="/starshiplist"
            element={
              <StarshipList
                starships={starships}
                setPage={setPage}
                page={page}
                setLoading={setLoading}
                loading={loading}
              />
            }
          ></Route>
          <Route path="/create" element={<CreateAccount />}></Route>
          <Route path="/logIn" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </Theme>
  )
}

export default App
