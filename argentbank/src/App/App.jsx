import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../components/Layout';
import ErrorPage from '../routes/ErrorPage';
import Home from '../routes/Home'
import Login from '../routes/Login';
import Profile from '../routes/Profile';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/ArgentBank-website'
      element={<Layout/>}
      errorElement={<ErrorPage/>}
    >
      <Route errorElement={<ErrorPage/>}/>
      <Route index={true} element={<Home/>}/>
      <Route path='signup' element={<Login/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Route>
  )
)
const App = () => {
  document.title = 'ArgentBank - Banque en ligne'
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
