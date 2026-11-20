import { supabase } from './utils/supabase' 


function GameCard({ games }) { //This component displays information about a single game and allows the user to mark it as played or add it to their "want to play" list.
  const handlesave = async (status) => { //This function is called when the user clicks one of the buttons to mark a game as played or add it to their "want to play" list. It inserts a new record into the "personal_games" table in Supabase with the game ID and the selected status.
    const { error } = await supabase.from("personal_games").insert([{ game_id: games.id, status: status }]) //Inserts a new record into the "personal_games" table in Supabase with the game ID and the selected status.
  } 
  return (
    <div className="card">
      <h2>{games.title}</h2>
      <p>Genre: {games.genre}</p>
      <p>Year of release: {games.release_year}</p>
      <button onClick={() => handlesave("played")}>Mark as Played</button> 
      <button onClick={() => handlesave("want_to_play")}>Add to Want to Play</button>
    </div>
  )
}

export default GameCard