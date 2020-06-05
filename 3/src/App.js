import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './css/style.css';
import './components/Navbar/navbar'
import Navbar from './components/Navbar/navbar';
import Calendar from './components/Calendar/calendar';
import EventForm from './components/Forms/addevent';
import LoginForm from './components/Forms/login'
class App extends Component {
  render(){
    return (
    <Router>
        <div className="App">
          <Navbar/>
          <Calendar/>
          <EventForm/>  
          <LoginForm/>
          <footer class="footer fixed-bottom font-small blue">
            <div class="footer-copyright text-center py-3">©Carpe Diem 2020 
              </div>
          </footer>
        </div>
    </Router>
);
  }
  
  
}

export default App;
