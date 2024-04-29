import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center text-white">
          <img src={Logo} alt="Navbar Logo" className="h-8 mr-2" />
          <span className="font-bold text-xl">Your App Name</span>
        </Link>
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/profile" className="text-white hover:text-yellow-400">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/create" className="text-white hover:text-yellow-400">
              Create Post
            </Link>
          </li>
          <li>
            <Link to="/authors" className="text-white hover:text-yellow-400">
              Authors
            </Link>
          </li>
          <li>
            <Link to="/logout" className="text-white hover:text-yellow-400">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
