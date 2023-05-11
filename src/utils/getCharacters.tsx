export const getCharactersFromPage = async (page = 1) : Promise<any> => {
  try {
    
    const URL = `${import.meta.env.VITE_BASE_URL}characters?pagina=${page}`
    
    const data = await fetch(URL)
    const characters = await data.json()
    // console.log(characters);  
    return characters;

  } catch (error) {
    console.error(error);
    
  }
}

export const getCharacterFromId = async (id : string) => {
  try {

    const URL = `${import.meta.env.VITE_BASE_URL}character/${id}`
    
    const data = await fetch(URL)
    const character = await data.json()
    character.origin = JSON.parse(character.origin)
    // console.log(character);  
    return character;

  } catch (error) {
    console.error(error);
  }
}

export const getCountCharacters = async () => {

  try {

    const URL = `${import.meta.env.VITE_BASE_URL}count`
    
    const countCharacters = await fetch(URL)
    return countCharacters;

  } catch (error) {
    console.error(error);
    
  }
}

export const loadDatabase = async () => {
  try {
  
    const URL = `${import.meta.env.VITE_BASE_URL}load`
  
    const isLoad = await fetch(URL)
    return isLoad;
  
  } catch (error) {
    console.error(error);
  }
}

export const updateCharacter = async (character: CharacterComplete) => {
  try {

    const URL = `${import.meta.env.VITE_BASE_URL}update`
    const data = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    })
    const response = await data.json()
    return response;

  } catch (error) {
    console.error(error)
  }
}