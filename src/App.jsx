import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Clientes from './Pages/Clientes'
import Proveedor from './Pages/Proovedor'
import Usuarios from './Pages/Usuarios'
import Logout from './Pages/Loout'
import './App.css'

const cards = [
  { titulo: 'Clientes',    descripcion: 'Gestiona la lista de clientes registrados', emoji: '👥', ruta: '/Clientes',  color: '#fde8d8', border: '#ff6b35' },
  { titulo: 'Proveedores', descripcion: 'Administra los proveedores del sistema',    emoji: '🏭', ruta: '/proveedor', color: '#d8f0e8', border: '#1a7a4a' },
  { titulo: 'Usuarios',    descripcion: 'Controla los usuarios y sus roles',         emoji: '🔐', ruta: '/usuarios',  color: '#ede8fd', border: '#7c3aed' },
]

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-page">
      <div className="home-hero">
        <span className="home-emoji">🐾</span>
        <h1>Panel <span>Administrativo</span></h1>
        <p>Bienvenido al sistema de gestión Doggies. ¿Qué deseas administrar hoy?</p>
      </div>
      <div className="home-cards">
        {cards.map((card) => (
          <div
            key={card.titulo}
            className="home-card"
            style={{ '--card-color': card.color, '--card-border': card.border }}
            onClick={() => navigate(card.ruta)}
          >
            <div className="card-icon">{card.emoji}</div>
            <h2>{card.titulo}</h2>
            <p>{card.descripcion}</p>
            <span className="card-link">Ver lista →</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/Clientes"  element={<Clientes />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/usuarios"  element={<Usuarios />} />
        <Route path="/logout"    element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App