import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="" className="nav__logo">
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav__toggle_btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
  );
};

export default Header;
