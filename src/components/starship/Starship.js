function Starship({ starship }) {
  return (
    <div>
      <h2>{starship.name}name</h2> <h2>{starship.model}model</h2>
      <h2>{starship.manufacturer} manufacturer</h2>
      <h2>{starship.passengers} passengers</h2>
      <h2>{starship.starship_class} starship class</h2>
    </div>
  )
}

export default Starship
