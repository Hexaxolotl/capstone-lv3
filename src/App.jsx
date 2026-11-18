import {useState} from 'react'
import { supabase } from './utils/supabase'
import useTable from './useTable'
import GameCard from './GamesCard'

function App() {
  const {data, error } = useTable("games")
  const [search, setSearch] = useState("")

  return (
    <div>
      <h1>To Be Played (TBP)</h1>
      <p>A tool for anyone who wants to keep track of what games they have played and want to play.</p>
      <input
        type="text"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
     {search !== "" && 
     data.filter((games)=> games.title.toLowerCase().includes(search.toLowerCase())).map((games)=>
    <GameCard key={games.id} games={games} />
     )}
    </div>
  )
}

export default App
