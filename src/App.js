import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home"
import About from './pages/About'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import NoPage from './pages/NoPage'

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = '/home' element={<Home/>} />
          <Route path ='/about' element={<About/>}/>
          <Route path = '/locations' element= {<Locations/>}/>
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/signup' element = {<SignUp/>}/>
          <Route path = '*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
