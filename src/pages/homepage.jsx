import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import AppNavigation from "../components/app-navigation";

function Homepage() {
  return (
    <div>
      <Navigation />
      <AppNavigation />
      <h1 className="test">World Wise</h1>
      <Link to="/app">APP</Link>
    </div>
  );
}

export default Homepage;
