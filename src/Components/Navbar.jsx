import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="div_title">
        <h1 className="title">Mario Bros Game React</h1>
      </div>
      <hr></hr>
      <div className="div_options">
        <Link to="/" className="links">Home</Link>
        <Link to="/start" className="links">Start</Link>
        <Link to="/howtoplay" className="links">How to Play</Link>
      </div>
    </nav>
  );
}
export default Navbar;
