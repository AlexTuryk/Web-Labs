import React from 'react'
import EventForm from '../Forms/addevent';
import LoginForm from '../Forms/login'
import { Component } from '@fullcalendar/core';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        
        return  (
        <div>
            <nav className="navbar navbar-dark navbar-expand-sm">
                <div className="navbar-collapse">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="Navbar">
                            <a className="navbar-brand mr-auto" href="#">
                                <img src="http://ai.lviv.ua/wp-content/uploads/2017/04/AI-11.png"/>
                            </a>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item "><a  className="nav-link" href="/"><span className="fa fa-calendar-alt fa-lg"></span> Головна</a></li>
                                {/*<li className="nav-item"><a className="nav-link" data-toggle="modal" data-target="#Eventmodel" href="create" id="addevent"><span className="fa fa-calendar-plus fa-lg"></span>  Додати подію</a></li>*/}
                                <li className="nav-item"><a  className="nav-link" href="/events"><span className="fa fa-list-alt fa-lg"></span> Переглянути події</a></li>
                                <li className="nav-item selector" data-theme-system="bootstrap">
                                    <select className="form-control form-color" defaultValue={'default'}>
                                        <option value='default'>Тема</option>
                                        <option value='darkly'>Darkly</option>
                                        <option value='flatly'>Flatly</option>
                                        <option value='sketchy'>Sketchy</option>
                                        <option value='superhero'>Superhero</option>
                                        <option value='united'>United</option>
                                        <option value='yeti'>Yeti</option>
                                    </select>
                                </li>
                            </ul>
                            <span className="navbar-text">        
                                <a data-toggle="modal" href="login" data-target="#loginModel">
                                    <span className="fa fa-sign-in"></span> Login
                                </a>              
                            </span>
                        </div>
                    </div>  
                </div>           
            </nav>
        </div>
        )
    }
}
