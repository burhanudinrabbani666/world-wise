import AppNavigation from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import style from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNavigation></AppNavigation>
      <p>List of Cities</p>

      <Footer />
    </div>
  );
}

export default Sidebar;
