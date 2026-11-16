function GameCard({ game }) {
  return (
    <div className="card">
      <h2>{game.title}</h2>
      <p>Genre: {game.genre}</p>
      <p>Year of release: {game.release_year}</p>
    </div>
  )
}

export default GameCard