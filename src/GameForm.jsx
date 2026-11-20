import { supabase } from './utils/supabase'

function GameForm({ reload }) {
const addGame = async (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const gameData = {
    title: formData.get("title"),
    genre: formData.get("genre"),
    release_year: formData.get("release_year")
  }
  await supabase.from("games").insert([gameData])
  reload()
}

    return (
    <form onSubmit={addGame}>
        <input type="text" name="title" placeholder="Game Title" />
        <input type="text" name="genre" placeholder="Game Genre" />
        <input type="text" name="release_year" placeholder="Release Year" />
        <button type="submit">Add Game</button>
    </form>
    )
}


export default GameForm