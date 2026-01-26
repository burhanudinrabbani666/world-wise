import { NavLink } from "react-router-dom";
import style from "./navigation.module.css";

function Navigation() {
  return (
    <nav className={style.nav}>
      <ul>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/pricing">Princing</NavLink>
        <NavLink to="/Product">Product</NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
