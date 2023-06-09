import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-[#fafafa]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Primera temporada de 
            <br className="hidden lg:inline-block"/>Rick & Morty
          </h1>
          <p className="mb-8 leading-relaxed">La primera temporada de la serie de televisión animada estadounidense Rick y Morty, se estrenó el 2 de diciembre de 2013 con «Pilot» y terminó el 14 de abril de 2014 con «Ricksy Business», con un total de once episodios. La primera temporada recibió aclamación de la crítica.</p>
          <div className="flex justify-center">
            <Link to="#container" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Personajes</Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://imagenes.elpais.com/resizer/PW7xvk0fMpr0nAZyQ_j9_PkUSsM=/1200x0/filters:focal(683x211:693x221)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z6WN33YVLRCTPCATP7EAJ2ODLE.jpg"/>
        </div>
      </div>
    </section>
  )
}

export default Hero