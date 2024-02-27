import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import Signup from './routes/Signup';
import User from './routes/User';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
          path='/home'
          element={<Home />}  
        />
        <Route 
          path='/signup'
          element={<Signup />}  
        />
        <Route 
          path='/user/:id'
          element={<User />}  
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
