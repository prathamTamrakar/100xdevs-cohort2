import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// import { Landing } from './pages/Landing'
// import { Dashboard } from './pages/Dashboard'


const Landing = React.lazy(() => import('./pages/Landing'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))

function Routing() {
  // window.location.href = "/"
  // window.location.href = "/dashboard"
  /* when we click the button everything is came back again on the browser so we cant do client side rountering
  window.location.href
  Client side rountering - everything is gone in one time that is single page application 
  */
  // useNavigate only use in Router component  

  //suspense API
  // when we want any route then request goes so its async task

  return (
    <div>

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."} >
            <Dashboard />
          </Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."} >
            <Landing />
          </Suspense>} />
        </Routes>
      </BrowserRouter>

    </div>

  )
}

function Appbar() {

  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate('/')
      }}>Home</button>

      <button onClick={() => {
        navigate('/dashboard')
      }}>Dashboard</button>
    </div>
  )
}


export default Routing
