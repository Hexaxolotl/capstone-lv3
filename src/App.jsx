
import useTable from './useTable'
import GameCard from './GamesCard.jsx'
import GameForm from './GameForm.jsx'
import { Routes, Route, Link } from "react-router"
import List from './List'
import Home from './Home'

function App() {
  const { loading, data, error, reload } = useTable("games") //This custom hook fetches data from the "games" table in Supabase and returns the loading state, the data, any error that occurred, and a function to reload the data.
  console.log(data)
  const { data: savedGames, reload: reloadSaved } = useTable("personal_games") //This custom hook fetches data from the "personal_games" table in Supabase and returns the data and a function to reload the data.
  return (
    <div>
      <nav>
        <ul>
          <li><strong>To Be Played (TBP)</strong></li>
        </ul>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to = "/saved">Saved Games</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home data={data} loading={loading} error={error} reloadSaved={reloadSaved} />} />
        <Route path="/saved" element={<List data={data} savedGames={savedGames} reloadSaved={reloadSaved} />} />
      </Routes>
    </div>
  )
}

export default App
