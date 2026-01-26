import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/pricing">Princing</NavLink>
        <NavLink to="/Product">Product</NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
