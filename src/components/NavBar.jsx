import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navigation">
      <div id="link-container">
        <Link to="/personal-website" className="link">
          Home
        </Link>
        <Link to="/blog" className="link">
          Blog
        </Link>
        <Link to="/aboutme" className="link">
          About
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
