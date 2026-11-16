import {useState} from 'react'
import { supabase } from './utils/supabase'
import useTable from './useTable'
import GameCard from './GameCard'

function App() {
  const {data, error } = useTable("title")
  
  return (
    <div>
      <h1>To Be Played (TBP)</h1>
      <p>A tool for anyone who wants to keep track of what games they have played and want to pla.</p>
    </div>
  )
}

export default App
