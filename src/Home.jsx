import { useState } from 'react'
import GameCard from './GamesCard.jsx'


function Home({ data, loading, error, reloadSaved }) {
    const [search, setSearch] = useState("")
    const filteredGames = data.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase()))
    const showLoadingMessage = loading
    const showErrorMessage = error !== ""
    const showNoResultsMessage =
        !loading &&
        !error &&
        search !== "" &&
        filteredGames.length === 0
    const showMatchingGames =
        !loading &&
        !error &&
        search !== "" &&
        filteredGames.length > 0
    
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
            {showMatchingGames &&
                filteredGames.map((game) => (
                    <GameCard
                        key={game.id}
                        games={game}
                        reloadSaved={reloadSaved}
                    />
                ))
            }
            {showLoadingMessage && <p>༄˖°.🍃.ೃ࿔*:･Loading games༄˖°.🍃.ೃ࿔*:･</p>}
            {showErrorMessage && <p>☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆Error: {error}☆.𓋼𓍊 𓆏 𓍊𓋼𓍊.☆</p>}
            {showNoResultsMessage && <p>𓅰 𓅬 𓅭 𓅮 𓅯No games found.𓅰 𓅬 𓅭 𓅮 𓅯</p>}

        </>
    )

}

export default Home