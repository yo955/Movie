//css
import '../css/Navbar.css'
// React-router
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='header'>
        <div className='container'>
          <nav className='navbar'>
            <Link to="/">
               <li className='logo'>Movies</li>
            </Link>
                <div className='Links'>
                  <ul>
                    <Link to="/WatchList">
                      <li>WatchList</li>
                    </Link>

                    <Link to="/Watched">
                     <li>Watched</li>
                    </Link>
                  </ul>
                    <Link to="btn">
                      <button className='btn' to="/btn">ADD</button>
                    </Link>
                </div>
          </nav>
        </div>
    </div>
  )
}
