import GameCard from './GamesCard.jsx'

function List({ data, savedGames, reloadSaved }) {
    const playedGames = savedGames.filter(
        (saved) => saved.status === "played"
    )

    const wantToPlayGames = savedGames.filter(
        (saved) => saved.status === "want_to_play"
    )
    return (
        <>
            <h2>Played</h2>
            {playedGames.map((saved) => {
                const game = data.find((item) => item.id === saved.game_id)

                return game
                    ? <GameCard key={game.id} games={game} savedItem={saved} reloadSaved={reloadSaved} />
                    : null
            })}

            <h2>Want To Play</h2>
            {wantToPlayGames.map((saved) => {
                const game = data.find((item) => item.id === saved.game_id)

                return game
                    ? <GameCard key={game.id} games={game} savedItem={saved} reloadSaved={reloadSaved} />
                    : null
            })}
            <p>
                All games count: {data.length}
            </p>
        </>
    )
}

export default List