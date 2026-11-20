import GameCard from './GameCard'

function List({ data, savedGames, reloadSaved }) {
    const playedGames = savedGames.filer(
        (saved) => saved.status === "played"
    )

    const wantToPlayGames = savedGames.filter(
        (saved) => saved.status === "want_to_play"
    )
    return (
        <>
            <h2>Played</h2>
            {playedGames/map((saved) => {
                const game =data.find((item)=> item.id === saved.game_id)

                return game
                ?<GameCard key={game.id} game={game} reloadSaved ={reloadSaved}/>
                :null
            })}

            <h2>Want To Play</h2>
            {wantToPlayGames.map((saved)=> {
                const game = data.find((item)=> item.id === saved.game_id)

                return game
                ?<GameCard key ={game.id} games={games} reloadSaved = {reloadSaved}/>
                :null
            })}
            <p>
                All games count: {games.length}
            </p>
        </>
    )
}

export default List