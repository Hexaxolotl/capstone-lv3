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
        <article className="hero-banner">
            <h1>Welcome, weary traveler. </h1>
            <p> Looking for a way to keep track of the games
                you've played or want to play? Look no further—consider this your TBP (like a TBR pile, except with more unspent skill points and Steam sale regret).</p>
        </article>
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
            {showNoResultsMessage && <p>404: Game not found. Either it’s super indie, unreleased, or there's a typo.</p>}

        </>
    )

}

export default Home