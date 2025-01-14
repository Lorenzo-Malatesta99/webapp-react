import Nav from "../components/Nav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-between bg-header text-white">
      <Link className="d-flex align-items-center" to="/">
        <img width={100} src={`/IMDBool-logo.png`} alt="Logo" />
        <h1 className="title">IMDBool</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
