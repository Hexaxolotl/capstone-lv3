import { useState } from 'react'



function Home({ data, loading, error, reloadSaved }) {
    const [search, setSearch] = useState("")
    const filteredGames = data.filter((game) => 
        game.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
         <h1>Welcome </h1>
        <label htmlFor="game-search">Search Games</label>
        <input
            id="game-search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
           />
          </> 
    )
}

export default Home
//this is what I want but I want it easier to read  for beginners
{/* <input
          type="text" //This is an input field for searching games by title. It updates the search state as the user types, and the filteredGames array is updated accordingly.
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
          {loading && <p>༄˖°.🍃.ೃ࿔*:･Loading༄˖°.🍃.ೃ࿔*:･</p>}
          {error && <p>☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆Error: {error}☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆</p>}
          {!loading && !error && search !== "" && filteredGames.length === 0 && (
            <p>𓅰 𓅬 𓅭 𓅮 𓅯No games found.𓅰 𓅬 𓅭 𓅮 𓅯</p>
          )}
          {search !== "" &&
            filteredGames.map((games) =>
              <GameCard key={games.id} games={games} /> //This component renders a card for each game in the filteredGames array, displaying its title, genre, release year, and buttons to mark it as played or add it to the "want to play" list.
            )}</>} /> */}
