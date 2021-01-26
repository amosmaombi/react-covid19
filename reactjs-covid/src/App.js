import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://disease.sh/v3/covid-19/countries/`
      )
      console.log(result.data)
      setCountries(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])


  return (
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} countries={countries} /> 
    </div>
  )
}

export default App
