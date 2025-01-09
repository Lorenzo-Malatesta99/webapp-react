import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3 bg-dark vh-20">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link to="/">Home</Link>
          <p>© 2023 Placeholder. All rights reserved. </p>
        </div>
        <div className="">
          <p>Follow us on:</p>
          <ul className="d-flex gap-3">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
