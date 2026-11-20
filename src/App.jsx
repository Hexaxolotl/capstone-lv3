import { useState } from 'react'
import useTable from './useTable'
import GameCard from './GamesCard'
import GameForm from './GameForm'
import { Routes, Route, Link } from "react-router"
import List from './List'
import Home from './Home'

function App() {
  const { loading, data, error, reload } = useTable("games") //This custom hook fetches data from the "games" table in Supabase and returns the loading state, the data, any error that occurred, and a function to reload the data.
  console.log(data)
  const { data: savedGames, reload: reloadSaved } = useTable("personal_games") //This custom hook fetches data from the "personal_games" table in Supabase and returns the data and a function to reload the data.
  const [search, setSearch] = useState("")
  const filteredGames = data.filter((games) => games.title.toLowerCase().includes(search.toLowerCase())) //This filters the data from the "games" table based on the search input, returning only the games whose title includes the search string (case-insensitive).
  return (
    <div>
      <h1>To Be Played (TBP)</h1>
      <p>A tool for anyone who wants to keep track of what games they have played and want to play.</p>
      <nav>
        <Link to="/">Home</Link> <br></br>
        <Link to="/saved">Saved Games</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/saved" element={<List games={data} savedGames={savedGames}/>}/>
      </Routes>
    </div>
  )
}

export default App
