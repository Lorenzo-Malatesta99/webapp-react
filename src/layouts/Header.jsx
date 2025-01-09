import Nav from "../components/Nav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex justify-content-between bg-dark text-white">
      <Link className="d-flex align-items-center" to="/">
        <img className="" width={100} src={`/IMDBool-logo.png`} alt="Logo" />
        <h1 className="title">IMDBool</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
