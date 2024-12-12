

import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPage from './Page'


function App() {


  return (
    <>
    <Router>
      <Routes>
       <Route path='/' element={<LandingPage/>}/>
       {/* <Route path='/' element={<LandingPage/>}/>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/' element={<LandingPage/>}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
