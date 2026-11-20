import {useState} from 'react'
import useTable from './useTable'
import GameCard from './GamesCard'
import GameForm from './GameForm'

function App() {
  const {loading, data, error, reload } = useTable("games")
  console.log(data)
  const [search, setSearch] = useState("")
  const filteredGames = data.filter((games)=> games.title.toLowerCase().includes(search.toLowerCase()))
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
      <GameForm reload={reload}/>
      {loading && <p>༄˖°.🍃.ೃ࿔*:･Loading༄˖°.🍃.ೃ࿔*:･</p>}
      {error && <p>☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆Error: {error}☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆</p>}
      {!loading && !error && search !== "" && filteredGames.length === 0 && (
        <p>𓅰 𓅬 𓅭 𓅮 𓅯No games found.𓅰 𓅬 𓅭 𓅮 𓅯</p>
      )}
      {search !== "" && 
     filteredGames.map((games)=>
    <GameCard key={games.id} games={games} />
     )}
    </div>
  )
}

export default App
