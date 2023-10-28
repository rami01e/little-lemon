import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import BookingPage from './components/BookingPage';
import About from './components/About';
import Menu from './components/Menu';
import Order from './components/Order';
import Login from './components/Login';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <header className=" sticky-top">
      <Nav />
    </header>
    <main>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/login" element={<Login />}></Route>
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
