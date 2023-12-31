import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages.jsx';
import Layout from './components/layout/Layout.jsx';
import Home from './components/pages/Home/index.jsx';
import Bookings from './components/pages/Bookings/index.jsx';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking.jsx';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('about').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('menu').path} 
            element={<UnderConstruction />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('login').path} 
            element={<UnderConstruction />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;