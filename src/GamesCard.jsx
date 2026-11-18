import useTable from "./useTable"

function GameCard({ games }) {
  return (
    <div className="card">
      <h2>{games.title}</h2>
      <p>Genre: {games.genre}</p>
      <p>Year of release: {games.release_year}</p>
    </div>
  )
}

export default GameCard