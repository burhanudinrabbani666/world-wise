import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className={style.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Princing</NavLink>
        </li>
        <li>
          <NavLink to="/Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={style.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
