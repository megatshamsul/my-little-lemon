import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import MenuPage from './pages/Menu';
import ReservationsPage from './pages/Reservations';
import OrderPage from './pages/Order';
import LoginPage from './pages/Login';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/menu'>
          <MenuPage />
        </Route>
        <Route path='/reservations'>
          <ReservationsPage />
        </Route>
        <Route path='/order'>
          <OrderPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
