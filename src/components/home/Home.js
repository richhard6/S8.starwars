import { Link } from 'react-router-dom'

import { Wrapper, Button, Title } from './styles'

function Home() {
  //pimp it n

  return (
    <Wrapper>
      <Title>Welcome to Starwars Starships</Title>
      <Link to="/starshiplist">
        <Button>START! </Button>
      </Link>
    </Wrapper>
  )
}

export default Home
