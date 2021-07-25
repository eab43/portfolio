import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about-me' component={AboutMe} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contact-me' component={ContactMe} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
