import { Link } from "react-router"

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/clubs">Clubs</Link></li>
        </ul>  
      </nav>
    </header>
  )
}

export default Header