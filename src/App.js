import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Filmes from './pages/Filmes'
import Personagens from './pages/Personagens'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    
    

    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/personagens" element={<Personagens />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
