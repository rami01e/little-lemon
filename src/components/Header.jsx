import "./Header.css";

const Header = props => {
    return (
    <header>
        <div>
            <img className="logo" src="logo.png" alt="Little Lemon logo" />
        </div>
        <div>
            {props.children}
        </div>
    </header>
    );
};
export default Header;