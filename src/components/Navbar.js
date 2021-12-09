import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import './Navbar.css'
import Checklist from '../assets/Checklist.svg'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Checklist} alt="checklist logo" />
          <span>Git It Done</span>
        </li>

        {!user && (
          <>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}

        {user && (
          <li>
            {!isPending && <button className="btn" onClick={logout}>Log Out</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}
          </li>
        )}
      </ul>
    </nav>
  )
}
