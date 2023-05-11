import { useEffect, useState } from "react";
import { getCharactersFromPage } from "../utils/getCharacters";

const Pagination = ({handlerPage} : any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  useEffect(() => {
    
    const getCharactersPromise = async () => {
      const charactersData = await getCharactersFromPage(currentPage)
      handlerPage(charactersData.data)
    }
      
    getCharactersPromise()
  }, [currentPage])
  

  return (
    <nav className="py-4">
      <ul className="flex gap-4 justify-center items-center">
        {/* Botón "Anterior" */}
        <li className={`${currentPage === 1 ? 'opacity-75 pointer-events-none text-slate-500' : 'text-blue-500'}`}>
          <button className="bg-white shadow-lg p-2" onClick={() => setCurrentPage(currentPage - 1)}>
            Anterior
          </button>
        </li>

        <li key="1" className={`rounded text-slate-800 text-center ${currentPage === 1 ? 'bg-blue-500 text-white rounded' : ''}`}>
          <button className="w-7 py-2" onClick={() => setCurrentPage(1)}>1</button>
        </li>
        <li key="2" className={`rounded text-slate-800 text-center ${currentPage === 2 ? 'bg-blue-500 text-white rounded' : ''}`}>
          <button className="w-7 py-2" onClick={() => setCurrentPage(2)}>2</button>
        </li>
        <li key="3" className={`rounded text-slate-800 text-center ${currentPage === 3 ? 'bg-blue-500 text-white rounded' : ''}`}>
          <button className="w-7 py-2" onClick={() => setCurrentPage(3)}>3</button>
        </li>
        <li key="4" className={`rounded text-slate-800 text-center ${currentPage === 4 ? 'bg-blue-500 text-white rounded' : ''}`}>
          <button className="w-7 py-2" onClick={() => setCurrentPage(4)}>4</button>
        </li>
        <li key="5" className={`rounded text-slate-800 text-center ${currentPage === 5 ? 'bg-blue-500 text-white rounded' : ''}`}>
          <button className="w-7 py-2" onClick={() => setCurrentPage(5)}>5</button>
        </li>

        {/* Botón "Siguiente" */}
        <li className={`${currentPage === totalPages ? 'opacity-75 pointer-events-none text-blue-500' : 'text-blue-500'}`}>
          <button className="bg-white shadow-lg p-2" onClick={() => setCurrentPage(currentPage + 1)}>
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination