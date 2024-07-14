import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faTachometerAlt,
  faWallet,
  faShoppingCart,
  faSearch,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const isLoggedIn = true;
  return (
    <aside className='w-80 h-4/5 p-4 bg-gray-800 fixedSidebar border-r border-white'>
      <nav className='bg-gray-800 px-6 py-10 rounded-lg'>
        <ul className='space-y-10 h-3/4 flex flex-col text-2xl'>
          <li>
            <Link className='text-blue-400 hover:text-gray-100' to='/home'>
              <div>
                <FontAwesomeIcon icon={faHome} className='mr-2' />
                <span>Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className='text-blue-400 hover:text-gray-100' to='/dashboard'>
              <div>
                <FontAwesomeIcon icon={faTachometerAlt} className='mr-2' />
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className='text-blue-400 hover:text-gray-100' to='/expenses'>
              <div>
                <FontAwesomeIcon icon={faShoppingCart} className='mr-2' />
                <span>Expenses</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className='text-blue-400 hover:text-gray-100' to='/budget'>
              <div>
                <FontAwesomeIcon icon={faWallet} className='mr-2' />
                <span>Budget</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className='text-blue-400 hover:text-gray-100' to='/search'>
              <div>
                <FontAwesomeIcon icon={faSearch} className='mr-2' />
                <span>Search</span>
              </div>
            </Link>
          </li>
        </ul>
        <hr className='my-8 border-white' />

        <ul className='space-y-10 h-3/4 flex flex-col text-lg'>
          <li>
            <Link className='text-blue-400 hover:text-gray-100' to='/settings'>
              <div>
                <FontAwesomeIcon icon={faCog} className='mr-2' />
                <span>Settings</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className='text-blue-400 hover:text-gray-100' to='/help'>
              <div>
                <FontAwesomeIcon icon={faQuestionCircle} className='mr-2' />
                <span>Help</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className='text-blue-400 hover:text-gray-100' to='/login'>
              <div>
                <FontAwesomeIcon icon={faSignOutAlt} className='mr-2' />
                <span>{isLoggedIn ? 'Log Out' : 'Log In'}</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
