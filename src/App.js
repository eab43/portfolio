import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactMe from './pages/ContactMe';

import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='page'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about-me' component={AboutMe} />
                <Route exact path='/projects' component={Projects} />
                <a href="eab_resume.pdf" download>Resume</a>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
