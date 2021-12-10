import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import StarshipList from '../starshipList/StarshipList'

function Home() {
  //migrar esto a APp.js y hacer este el componente de HOME, de bienvenida, Start go

  return <Link to="/starshiplist">this is the home page start :) </Link>
}

export default Home
