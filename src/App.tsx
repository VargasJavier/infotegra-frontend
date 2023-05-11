import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import CharacterContainer from "./pages/character/CharacterContainer";
import NotFound from "./pages/NotFound";
import CharacterDetail from "./pages/CharacterDetail";

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/characters" element={<CharacterContainer />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
