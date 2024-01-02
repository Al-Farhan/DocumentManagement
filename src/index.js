import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout';
import FormSubmit from './components/FormSubmit'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Login from '../src/components/Login'
import Signup from '../src/components/Signup'
import About from '../src/components/About'
import Tools from '../src/components/Tools'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element= {<Home />} ></Route>
      <Route path='about' element= {<About />} ></Route>
      <Route path='tools' element= {<Tools />} ></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar />
    <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
