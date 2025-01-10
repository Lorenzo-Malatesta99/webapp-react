import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3 sec-color vh-20">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link to="/">Home</Link>
          <p>© 2023 Placeholder. All rights reserved. </p>
        </div>
        <div className="d-flex flex-column">
          <p>Follow us on:</p>
          <ul className="d-flex gap-3">
            <li className="hover">
              <a href="#">Facebook</a>
            </li>
            <li className="hover">
              <a href="#">Twitter</a>
            </li>
            <li className="hover">
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
