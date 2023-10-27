import logo from "../assets/Logo.svg";
import "./Header.css";
const Header = () => {
    return (
    <header className=" sticky-top">
        <nav className="navbar navbar-expand-md">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img className="logo" src={logo} alt="Little Lemon logo" width="148" height="40" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-end">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/menu">Menu</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/reservations">Reservations</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/order">Order Online</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    );
};
export default Header;