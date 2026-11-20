import { useState, useEffect } from 'react' 
import { supabase } from './utils/supabase'

function useTable(table) {
  //This tracks whether the Supabase is currently fetching data (starts true).
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]) //This tracks the data fetched from Supabase (starts as an empty array).
  const [error, setError] = useState("") //This tracks any errors that occur during the fetch (starts as an empty string).
  const [version, setVersion] = useState(0) //This tracks the version of the data fetched from Supabase (starts at 0). It is used to trigger a reload of data when it changes.

  useEffect(() => {
    //Turns loading back on whenever a fresh fetch or reload starts.
    const load = async () => {
      setLoading(true)
      const result = await supabase.from(table).select()
      //If the fetch fails, we set the error state and turn loading off.(Turns loading off before stopping if Supabase returns an error.)
      if (result.error) { 
        setError(result.error.message)
            setLoading(false)
            //Stops the function from continuing to set data if there was an error.
        return 
      }
      setData(result.data) //If the fetch succeeds, we set the data state and turn loading off.
        setLoading(false) //Turns loading off after the fetch is complete.
    }
    load() //Calls the load function to fetch data from Supabase.
  }, [table, version]) //The useEffect hook runs whenever the table or version state changes, triggering a new fetch from Supabase.

  const reload = () => { //triggers the useState to fetch fresh data from Supabase.
    setVersion(version + 1) //Increments the version state to trigger a reload of data.
  }

  return { loading,data, error, reload } //Returns the loading, data, error, and reload states to the component that uses this hook.
}

export default useTable
