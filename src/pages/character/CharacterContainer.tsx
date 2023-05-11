import Pagination from "../../components/Pagination"
import { getCharactersFromPage, loadDatabase } from "../../utils/getCharacters"
import CharacterList from "./CharacterList"
import { useState, useEffect } from 'react'

const CharacterContainer = () => {

  const [characters, setCharacters] = useState<CharacterInterface[]>([])
  const [isLoadDatabase, setLoadDatabase] = useState<boolean>(false)
  
  const loadDatabasePromise = async () => {
    const response = await loadDatabase()
    console.log(response)
  }

  const getCharactersPromise = async () => {
    const charactersData = await getCharactersFromPage()
    setCharacters(charactersData.data)
  }
  
  useEffect(() => {  
    if(isLoadDatabase) loadDatabasePromise()
    getCharactersPromise()
    
  }, [isLoadDatabase])

  useEffect(() => {
    getCharactersPromise()
  }, [isLoadDatabase])
  

  return (
    <section id="container" className="text-gray-600 body-font bg-[#fafafa]">
      {
        characters.length && <Pagination handlerPage={(characters : CharacterInterface[]) => setCharacters(characters)}/>
      }
      <div className="container px-5 mx-auto">
        <CharacterList characters={characters} handleLoad={() => setLoadDatabase(true)}/>
      </div>
      {
        characters.length && <Pagination handlerPage={(characters : CharacterInterface[]) => setCharacters(characters)}/>
      }
    </section>
  )
}

export default CharacterContainer