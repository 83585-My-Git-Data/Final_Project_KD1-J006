import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



import Login from './screens/Login'


import LandingPage from './screens/LandingPage'
import Register from './screens/Register'
import Home from './screens/Home'
import AboutUs from './screens/AboutUs'
import Members from './screens/Members'
import Events from './screens/Events'
import Gallery from './screens/Gallery'


function App() {
  return (
    <div className='container-fluid'>
      <Routes>

        <Route path='' element={<LandingPage />} />
        <Route path='landingpage' element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='members' element={<Members />} />
        <Route path='events' element={<Events />} />
        <Route path='gallery' element={<Gallery />} />


        







      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
