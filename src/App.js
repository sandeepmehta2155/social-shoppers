import { useState, useEffect } from 'react';
import Routers from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import LoggedInHeader from './components/LoggedInHeader';
import api from './api';

import './assets/css/App.css';
import './assets/css/style.css';
import './assets/css/responsive-style.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    setUser(api.configurations.GET_CURRENT_USER())
  }, [])
  return (
    <div>
      {user ? <LoggedInHeader /> : <Header />}
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
