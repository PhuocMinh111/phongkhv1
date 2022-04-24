import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Home from './Home'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Contact from './ Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer'
function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route  path='/contact'>
      <Contact/>
      </Route>
      <Footer/>
    </Router>
  )
}

export default App
