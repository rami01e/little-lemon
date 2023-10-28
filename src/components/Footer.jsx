import "./Footer.css"
import logo from "../assets/Logo.svg";

const Footer = (props) => {
    return (
    <>
        <section>
            <img src={logo} alt="Little Lemon logo" width="150px" height="150px" />
        </section>
        <section>
            {props.children}
        </section>
        <section>
            <p>&copy; 2023 Little Lemon</p>
        </section>
    </>
    );
};
export default Footer;