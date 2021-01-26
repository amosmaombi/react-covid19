import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ countries, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {countries.map((onecountry,index) => (
        <CharacterItem key={index} onecountry={onecountry}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid
