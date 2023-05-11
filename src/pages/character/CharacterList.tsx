import { useEffect, useState } from "react";
import Character from "./Character"
import SkeletonList from "../../components/skeletons/SkeletonList";

const CharacterList = ({characters, handleLoad} : any) => {

  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [isLoad]);

  return (
    <div className={(characters.length) ? 'flex flex-wrap m-4' : 'flex flex-wrap m-4 gap-4'}>
        {
          (characters.length) ? (
            characters.map((characterData : CharacterInterface) => (
              <Character key={characterData.id} character={characterData}/>
              ))
          ) : (isLoad) ? (
              <SkeletonList/>
            ) : (
              <section className="flex flex-col w-full justify-center gap-4">
                <p className="text-center">No se encontraron personajes. ¿Desea llenar la base de datos?</p>
                <section className="flex justify-center">
                  <button onClick={handleLoad} className="border-blue-500 text-blue-500 border py-2 px-4 rounded hover:bg-blue-500 hover:text-white">Cargar personajes</button>
                </section>
              </section>
          )
        }
    </div>
  )
}

export default CharacterList