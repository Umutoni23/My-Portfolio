import { NavLink } from "react-router-dom";
import {
  HiAcademicCap,
  HiEnvelope,
  HiHome,
  HiIdentification,
  HiLightBulb,
} from "react-icons/hi2";
import profileImage from "../assets/ye.jpeg";


const navItems = [
  { to: "/", label: "Home", icon: HiHome },
  { to: "/about", label: "About", icon: HiIdentification },
  { to: "/skills", label: "Skills", icon: HiLightBulb },
  { to: "/certificates", label: "Certificates", icon: HiAcademicCap },
  { to: "/contact", label: "Contact", icon: HiEnvelope },
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
              <item.icon aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
