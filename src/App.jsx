import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import './App.css'
import SHNavbar from './components/Navbar.jsx';
import Videos from './components/Videos.jsx';
import Music from './components/Music.jsx';
import Photos from './components/Photos.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';
import Home from './pages/home.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/music",
    element: <Music />,
    errorElement: <NotFound />,
  },
  {
    path: "/photos",
    element: <Photos />,
    errorElement: <NotFound />,
  },
  {
    path: "/videos",
    element: <Videos />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFound />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <div className="container-sm bg-dark bg-opacity-75" >
        <SHNavbar />
        <RouterProvider router={router} />
      </div>
    </Container>  
  )
}

export default App
