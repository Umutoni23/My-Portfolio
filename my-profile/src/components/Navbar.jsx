import { NavLink } from "react-router-dom";
import profileImage from "../assets/ye.jpeg";


const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <NavLink to="/" className="site-brand">
          <img
            src={profileImage}
            alt="Leoncie Umutoni"
            className="site-brand__image"
          />
          Umutoni's Portfolio
        </NavLink>

        <nav className="site-menu" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-menu__link${isActive ? " site-menu__link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
