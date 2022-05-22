import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useRef } from "react";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div>
          <h2 className="logo">{"<WB />"}</h2>
        </div>
        <nav ref={navRef}>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/aboutme">
            About Me
          </Link>
          <Link className="link" to="/myprojects">
            My Projects
          </Link>
          <Link className="link" to="/contactme">
            Contact Me
          </Link>
          <Link className="link" to="/gospel">
            The Gospel
          </Link>
          {/* This button will be shown on a larger screen */}
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>

        {/* This button will be shown on a smaller screen */}
        <button className="nav-btn nav-flex-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
      <div className="header-sep"></div>
    </>
  );
}

export default NavBar;
