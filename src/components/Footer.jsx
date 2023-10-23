import "./Footer.css"
const Footer = (props) => {
    return (
    <footer>
        <section>
            <img src="logo.png" alt="Little Lemon logo" width="150px" height="150px" />
        </section>
        <section>
            {props.children}
        </section>
        <section>
            <p>&copy; 2023 Little Lemon</p>
        </section>
    </footer>
    );
};
export default Footer;