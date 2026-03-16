import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        🌴 Odisha Tourism
      </Link>

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm font-medium">
        <li>
          <Link
            to="/"
            className={`hover:text-yellow-300 transition ${isActive('/') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/destinations"
            className={`hover:text-yellow-300 transition ${isActive('/destinations') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''}`}
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            to="/favourites"
            className={`hover:text-yellow-300 transition ${isActive('/favourites') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''}`}
          >
            Favourites ❤️
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar