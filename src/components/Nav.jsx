import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img className="logo" src={logo} alt="Little Lemon logo" width="148" height="40" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav text-end">
                        <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/menu" className="nav-link">Menu</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/booking" className="nav-link">Booking Page</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/order" className="nav-link">Order Online</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};
export default Nav;