import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  <PageNav />;

  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>Worldwise</h1>
      <NavLink to="/app">Go to the app</NavLink>
    </div>
  );
}

export default Homepage;
