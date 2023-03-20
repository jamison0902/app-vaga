import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Candidato from './pages/candidato/Candidato';
import Empresa from './pages/empresa/Empresa'
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import InformacaoVaga from './pages/candidato/InformacaoVaga';
// import './App.css';


function App() {
  return (
    <>
      <div className="container-xxl bg-white p-0">

        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}

        <NavMenu />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/candidato' element={<Candidato />} />
          <Route path='/empresa' element={<Empresa />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />          
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
