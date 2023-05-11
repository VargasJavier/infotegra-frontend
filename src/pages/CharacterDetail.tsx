import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterFromId, updateCharacter } from '../utils/getCharacters';
import Modal from 'react-modal';


const characterModel = {
  id: 0,
  name: '',
  species: '',
  status: '',
  image: '',
  origin: {
    name: '',
    url: ''
  },
  type: '',
  gender: ''
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CharacterDetail = () => {

  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterComplete>(characterModel);
  const [characterUpdate, setCharacterUpdate] = useState<CharacterComplete>(characterModel);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(character.gender);

  const handleOpenModal = () => {
    setShowModal(true)
  }
  
  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleChange = (e : any) => {
    if(e.target.name.split(' ').length === 2){
      const originName = e.target.name.split(' ')
      setCharacterUpdate({
        ...characterUpdate,
        "origin" : {
          ...characterUpdate.origin,
          [originName[1]]: e.target.value
        }
      })
    } else {
      setCharacterUpdate({...characterUpdate, [e.target.name]: e.target.value})
    }
  }
  const handleOptionChange = (e : any) => {
    setSelectedOption(e.target.value)
    setCharacterUpdate({...characterUpdate, 'gender': e.target.value})
  }
  const handleSubmit = (e : any) => {
    e.preventDefault()
    updateCharacter(characterUpdate)
    console.log(characterUpdate)
    handleCloseModal()
    getCharacterPromise()
  }
  const getCharacterPromise = async () => {
    const charactersData = (id) ? await getCharacterFromId(id) : characterModel
    setCharacter(charactersData)
    setCharacterUpdate(charactersData)
  }
  useEffect(() => {getCharacterPromise()}, [id])

  useEffect(() => {setSelectedOption(character.gender)}, [showModal])

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <section>
        <Modal 
           isOpen={showModal}
           style={customStyles}
           contentLabel="Formulario">

          <section className='relative'>
            <button onClick={handleCloseModal} className='absolute right-0'>X</button>
            <h2 className='text-center text-lg'>{`Editar personaje con ID ${character.id}`}</h2>
            <form onSubmit={handleSubmit}>
              <div className='flex gap-4 my-4'>
                <label>
                  <span className='block text-sm py-2 text-slate-500'>Nombre:</span>
                  <input
                    autoComplete='off'
                    value={characterUpdate.name}
                    onChange={handleChange}
                    name='name'
                    className="border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                    type="text"/>
                </label>
                <label>
                  <span className='block text-sm py-2 text-slate-500'>Status:</span>
                  <input
                    autoComplete='off'
                    value={characterUpdate.status}
                    onChange={handleChange}
                    name='status'
                    className="border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                    type="text"/>
                </label>
              </div>
              <div className='flex gap-4 my-4'>
                <label>
                  <span className='block text-sm py-2 text-slate-500'>Tipo:</span>
                  <input
                    autoComplete='off'
                    value={characterUpdate.type}
                    onChange={handleChange}
                    name='type'
                    className="border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                    type="text"/>
                </label>
                <label>
                  <span className='block text-sm py-2 text-slate-500'>Especie:</span>
                  <input
                    autoComplete='off'
                    value={characterUpdate.species}
                    onChange={handleChange}
                    name='species'
                    className="border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                    type="text"/>
                </label>
              </div>
              <div className='flex gap-4 my-4'>
                <label>
                  <span className='block text-sm py-2 text-slate-500'>Imagen:</span>
                  <input
                    autoComplete='off'
                    value={characterUpdate.image}
                    onChange={handleChange}
                    name='image'
                    className="border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                    type="text"/>
                </label>
                <label className='flex gap-4'>
                  <span className='block text-sm py-2 text-slate-500'>Género:</span>
                  <section className='flex flex-col'>
                    <label htmlFor="male">
                      <input
                        id='male'
                        autoComplete='off'
                        value="Male"
                        onChange={handleOptionChange}
                        checked={selectedOption === 'Male'}
                        name='gender'
                        className="mr-2 border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                        type="radio"/>
                        Masculino
                    </label>
                    <label htmlFor="female">
                      <input
                        id='Female'
                        autoComplete='off'
                        value="female"
                        onChange={handleOptionChange}
                        checked={selectedOption === 'Female'}
                        name='gender'
                        className="mr-2 border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                        type="radio"/>
                        Femenino
                    </label>
                    <label htmlFor="unknown">
                      <input
                        id='unknown'
                        autoComplete='off'
                        value="unknown"
                        onChange={handleOptionChange}
                        checked={selectedOption === 'unknown'}
                        name='gender'
                        className="mr-2 border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                        type="radio"/>
                        Unknown
                    </label>
                  </section>
                </label>
              </div>
              <h3 className='text-center'>Origen</h3>
              <div className='flex gap-4 mb-4'>
                <label>
                  <span className='block text-sm py-2 text-slate-500'>Nombre:</span>
                  <input
                    autoComplete='off'
                    value={characterUpdate.origin.name}
                    onChange={handleChange}
                    name='origin name'
                    className="border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                    type="text"/>
                </label>
                <label>
                  <span className='block text-sm py-2 text-slate-500'>URL:</span>
                  <input
                    autoComplete='off'
                    value={characterUpdate.origin.url}
                    onChange={handleChange}
                    name='origin url'
                    className="border p-2 rounded focus:outline-blue-500 focus:bg-blue-50 text-sm text-slate-800"
                    type="text"/>
                </label>
              </div>
              <section className='flex justify-center'>
                <button className='bg-blue-500 hover:opacity-80 text-sm text-white p-2 px-4 rounded'>Editar personaje</button>
              </section>
            </form>
          </section>
        </Modal>
      </section>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={character.image}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{character.species.toUpperCase()}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{character.name}</h1>
            <p className="leading-relaxed">
              <div>
                {(character.gender) ? `Género: ${character.gender}` : null}
              </div>
              <div>
                {(character.origin.name) ? `Origen: ${character.origin.name}` : null}
              </div>
              <div>
                {(character.type) ? `Tipo: ${character.type}` : null}
              </div>
              <div>
                {(character.status) ? `Estado: ${character.status}` : null}
              </div>
            </p>
            <button onClick={handleOpenModal} className="flex mt-4 text-white bg-blue-500 border-0 py-2 px-6 hover:bg-blue-600 rounded">Editar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CharacterDetail