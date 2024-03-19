import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import Home from '../routes/Home';
import Login from '../routes/Login';
import Profile from '../routes/Profile';
import Footer from '../components/Footer';


const App = () => {
  return (
    <>
    <Header />
        <Routes>
          <Route 
            path='/'
            element={<Home />}  
          />
          <Route 
            path='/signup'
            element={<Login />}
          />
          <Route 
            path='/profile'
            element={<Profile />}
          />
        </Routes>
      <Footer />
    </>
        
  );

}
  

export default App;
