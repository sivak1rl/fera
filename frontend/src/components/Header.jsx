import { Link } from "react-router"

function Header() {
  return (
    <header>
      <h1>Welcome to FERA</h1>
      <p>Ford Employees Recreation Association</p>
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