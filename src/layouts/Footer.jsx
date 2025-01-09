import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Link to="/">Home</Link>
                <p>© 2023 Placeholder. All rights reserved.</p>
                <p>Follow us on:</p>
                <div>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </footer>
    );
};


export default Footer;