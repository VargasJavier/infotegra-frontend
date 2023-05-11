import { MdOutlineScience as IconScience } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font bg-[#fafafa]">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <IconScience className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"/>
          <span className="ml-3 text-xl">Rick and Morty</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Descompilados —
          <Link to="/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@descompilados</Link>
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer