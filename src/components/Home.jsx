import Main from "./Main";
import Hero from './Hero';
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
const Home = () => {
    return (
        <Main>
            <Hero></Hero>
            <Highlights></Highlights>
            <Testimonials></Testimonials>
            <About></About>
        </Main>
    );
};
export default Home;