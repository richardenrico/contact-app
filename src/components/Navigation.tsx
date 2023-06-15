import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/daftar-post">Daftar postingan</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
