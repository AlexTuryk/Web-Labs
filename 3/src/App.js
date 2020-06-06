import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './css/style.css';
import './components/Navbar/navbar'
import Navbar from './components/Navbar/navbar';
import Calendar from './components/Calendar/calendar';
import AddEventForm from './components/EventForm/AddEventForm';
import LoginForm from './components/Forms/login'

import EventForm from './components/EventForm/App';
class App extends Component {
  render(){
    return (
    <Router>
        
        <Navbar />
        <LoginForm/>
        
        <Switch>
          <Route exact path="/">     
            <Calendar/>  
          </Route>
          
          <Route path="/events">
            <EventForm />  
          </Route>
        </Switch>
        
        <footer className="footer fixed-bottom font-small blue">
          <div className="footer-copyright text-center py-3">©Carpe Diem 2020 
          </div>
        </footer>
        
    </Router>
);
  }
  
  
}

export default App;
{/*<div className="App">
          <Navbar/>
          <Calendar/>
          <Route path='/create' component={EventForm}/>  
          <Route path='/login' component={LoginForm}/>
          <Route path='/events' component={DisplayEvent}/>
          <footer class="footer fixed-bottom font-small blue">
            <div class="footer-copyright text-center py-3">©Carpe Diem 2020 
              </div>
          </footer>
        </div>*/}