import { Link } from "react-router-dom";
import Navigation from "../components/navigation";

function Homepage() {
  return (
    <div>
      <Navigation />
      <h1>World Wise</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default Homepage;
