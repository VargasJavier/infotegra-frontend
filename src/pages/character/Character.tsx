import { Link } from "react-router-dom"

const Character = ( {character} : any ) => {
  const {id, name, image, status, species} = character
  
  return (
    <>
      <Link to={`/characters/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full rounded relative hover:opacity-85 hover:shadow-lg">
        <span className="absolute top-5 left-5 bg-white shadow-lg w-8 h-8 flex items-center justify-center rounded-full text-slate-800 z-10">{id}</span>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{species.toUpperCase()}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium text-ellipsis whitespace-nowrap overflow-hidden">{name}</h2>
          <p className="mt-1">{status}</p>
        </div>
      </Link>
    </>
  )
}

export default Character