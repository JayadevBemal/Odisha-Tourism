import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-16 py-10 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Brand */}
        <div >
          <h2 className="text-xl font-bold mb-3">🌴 Odisha Tourism</h2>
          <p className="text-green-200 text-sm leading-relaxed">
            Explore the temples, beaches, wildlife and culture of incredible Odisha.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-yellow-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-green-200 hover:text-white transition">Home</Link></li>
            <li><Link to="/destinations" className="text-green-200 hover:text-white transition">Destinations</Link></li>
            <li><Link to="/favourites" className="text-green-200 hover:text-white transition">Favourites</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-yellow-300 mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://github.com/JayadevBemal" target="_blank" rel="noreferrer"
                className="text-green-200 hover:text-white transition">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jayadev-bemal-6721991ba/" className="text-green-200 hover:text-white transition">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="text-green-200 hover:text-white transition">Telegram</a>
            </li>
          </ul>
        </div>

      

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-green-700 text-center text-green-300 text-sm">
        © 2026 Jayadev Bemal 
      </div>

    </footer>
  )
}

export default Footer