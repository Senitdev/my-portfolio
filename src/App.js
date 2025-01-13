import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './composant/Abouts';
import Blog from './composant/Blog';
import FormContact from './composant/Form';
import Header from './composant/Header';
import Layout from './composant/Layout';
import PortFolio from './composant/PortFolio';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
  children:[
  {
    path:"/about",
    element:<About/>
  },
  {
   path:"/blog",
   element:<Blog/>
  },
  {
    path:"/portfolio",
    element:<PortFolio/>
  },
  {
    path:"/contact",
    element:<FormContact/>
  }
]}
]);
function App() {
  return <div>
   <Header/>
    <RouterProvider router={router}></RouterProvider>
  </div>
}

export default App;
