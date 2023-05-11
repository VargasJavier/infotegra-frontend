interface CharacterInterface {
  id: number,
  name: string,
  species: string,
  status: string,
  image: string
}

interface originChild {
  name: string,
  url: string
}

interface CharacterComplete {
  id?: number,
  name: string,
  species: string,
  status: string,
  image: string,
  origin: originChild,
  type: string,
  gender: string
}