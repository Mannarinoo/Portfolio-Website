import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import BostonCrime from './components/pages/BostonCrime';
import GoogleApp from './components/pages/GoogleApp';
import FIFA from './components/pages/fifa';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path='/bostoncrime' component={BostonCrime} />
        <Route path='/googleapp' component={GoogleApp} />
        <Route path='/fifa' component={FIFA} />
      </Switch>
    </Router>
  );
}

export default App;