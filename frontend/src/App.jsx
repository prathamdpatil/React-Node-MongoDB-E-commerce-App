import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import React from 'react'

const App = () => {
  return (
    <>
    <Container>
      <Header/>
      <ToastContainer />
      <Container className='my-2'/>
          <Outlet/>
      </Container>
    </>
  );
}

export default App
