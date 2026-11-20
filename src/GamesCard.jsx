import { supabase } from './utils/supabase' 


function GameCard({ games, savedItem, reloadSaved }) { //This component displays information about a single game and allows the user to mark it as played or add it to their "want to play" list.
  const handlesave = async (status) => { //This function is called when the user clicks one of the buttons to mark a game as played or add it to their "want to play" list. It inserts a new record into the "personal_games" table in Supabase with the game ID and the selected status.
    const { error } = await supabase.from("personal_games").insert([{ game_id: games.id, status: status }]) //Inserts a new record into the "personal_games" table in Supabase with the game ID and the selected status.
    if (!error) {
      reloadSaved(); // Reload the saved games list
    }
  }
  const handleRemove = async () => { //This function is called when the user clicks the "Remove" button to remove a game from their saved games list. It deletes the corresponding record from the "personal_games" table in Supabase based on the game ID.
    const { error } = await supabase.from("personal_games").delete().eq("game_id", games.id) //Deletes the corresponding record from the "personal_games" table in Supabase based on the game ID.
     if (!error) {
        reloadSaved(); // Reload the saved games list
      }
  }
  return (
    <article>
      <h2>{games.title}</h2>
      <p>Genre: {games.genre}</p>
      <p>Year of release: {games.release_year}</p>
      <button onClick={() => handlesave("played")}>Mark as Played</button> <br></br>
      <button onClick={() => handlesave("want_to_play")}>Add to Want to Play</button>
      <button onClick={handleRemove}>Remove</button>
    </article>
  )
}

export default GameCard