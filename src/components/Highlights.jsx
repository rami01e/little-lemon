import salad from "../assets/greek-salad.jpg";
import bruchetta from "../assets/bruchetta.jpg";
import dessert from "../assets/lemon-dessert.jpg";
import "./Highlights.css";
const Highlights = () => {
    return (
        <div className="container mt-5 pe-3">
            <div className="row">
                <div className="col text-start">
                    <h2 className="">Specials</h2>
                </div>
                <div className="col text-end">
                    <a className="btn btn-secondary" href="/menu">Online Menu</a>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12 col-md-4">
                    <div class="card h-100">
                        <img src={salad} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h3 className="card-title d-inline">Greek Salad</h3>
                            <h4 className="float-end">$12.99</h4>
                            <p class="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        </div>
                        <a href="/" class="orderLink text-start ms-3 mb-1">Order a delivery</a>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div class="card h-100">
                        <img src={bruchetta} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h3 className="card-title d-inline">Bruchetta</h3>
                            <h4 className="float-end">$5.99</h4>
                            <p class="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        </div>
                        <a href="/" class="orderLink text-start ms-3 mb-1">Order a delivery</a>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div class="card h-100">
                        <img src={dessert} class="card-img-top" alt="..." />
                        <div class="card-body text-start">
                            <h3 className="card-title d-inline">Lemon Dessert</h3>
                            <h4 className="float-end">$5.00</h4>
                            <p class="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        </div>
                        <a href="/" class="orderLink text-start ms-3 mb-1">Order a delivery</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Highlights;