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
import Register2 from './screens/Register2'
import Register3 from './screens/Register3'
import Engage from './screens/Engage'
<<<<<<< HEAD

import MyJobsSection from './screens/MyJobSection'
import JobSection from './screens/JobSection'
import JobPostingPage from './screens/JobPostingPage'
=======
import JobPortal from './screens/JobSection'
import MyJobsSection from './screens/MyJobSection'
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990


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
        <Route path='register2' element={<Register2 />} />
        <Route path='register3' element={<Register3 />} />
        <Route path='engage' element={<Engage />} />
<<<<<<< HEAD
        <Route path='jobsection' element={<JobSection />} />
        <Route path='myjobsection' element={<MyJobsSection />} />
        <Route path='jobpostingpage' element={<JobPostingPage />} />

=======
        <Route path='jobportal' element={<JobPortal />} />
        <Route path='myjobsection' element={<MyJobsSection />} />
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990







        







      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
