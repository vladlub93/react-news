import { useState } from 'react'
import Login from './components/Login/index'
import Home from './components/HomePage/index'
import News from './components/News/index'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';


function App() {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <Router>
      <div>
        <div className="navBar">
          <Button className="navBtn">
           <Link to="/">Home</Link>
          </Button>
          <Button className="navBtn">
            <Link to="/news">News</Link>
          </Button>
          <Button onClick={() => setIsOpen(!isOpen)} className="navBtn">
           <Link to="/login">Login</Link>
          </Button>
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
          <Route path="/login" exact>
            <Login open={isOpen} onClose={() => setIsOpen(false)} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
