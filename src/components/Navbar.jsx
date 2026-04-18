import './Navbar.css'
import { Header } from './Header'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm mi-navbar">
      <div className="container-fluid">
        <Header />
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar