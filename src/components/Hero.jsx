import image from "../assets/restauranfood.jpg";
import "./Hero.css";
const Hero = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col text-start">
                    <h1 className="ll">Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p className="herotext overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a className="btn btn-secondary" href="/reservations">Reserve a Table</a>
                </div>
                <div className="col center">
                    <img src={image} alt="" className="heroimage img-fluid rounded p-3"/>
                </div>
            </div>
        </div>
    );
};
export default Hero;