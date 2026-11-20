import { supabase } from './utils/supabase'


function GameCard({ games, savedItem, reloadSaved }) { //This component displays information about a single game and allows the user to mark it as played or add it to their "want to play" list.
  const handlesave = async (status) => {
    const result = savedItem
      ? await supabase
        .from("personal_games")
        .update({ status })
        .eq("game_id", games.id)
      : await supabase
        .from("personal_games")
        .insert([{ game_id: games.id, status }])

    if (!result.error) {
      reloadSaved()
    }
  }
  const handleRemove = async () => { //This function is called when the user clicks the "Remove" button to remove a game from their saved games list. It deletes the corresponding record from the "personal_games" table in Supabase based on the game ID.
    const { error } = await supabase.from("personal_games").delete().eq("game_id", games.id) //Deletes the corresponding record from the "personal_games" table in Supabase based on the game ID.
    if (!error) {
      reloadSaved(); // Reload the saved games list
    }
  }
  return (
    <article className="quest-row">
      <div className="quest-info">
        <h2>{games.title}</h2>
        <p>Genre: {games.genre} &bull; Year: {games.release_year}</p>
      </div>
      <div className="quest-status">
        <button className="outline" onClick={() => handlesave("played")}>Mark as Played</button>
        <button className="outline" onClick={() => handlesave("want_to_play")}>Add to Want to Play</button>
        <button className="outline abandon-quest" onClick={handleRemove}>Abandon Quest</button>
      </div>
    </article>
  )
}

export default GameCard