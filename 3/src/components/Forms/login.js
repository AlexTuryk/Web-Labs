import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

export default class LoginForm extends React.Component{
    render(){
        return  (
            <div id="loginModel" className="modal fade" role="dialog">
                <div className="modal-dialog modal-lg" role="content">
                
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Login </h4>
                        <button id="hideLogin" type="button" className="close" >&times;</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-sm-4">
                                        <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                                        <input type="email" className=" -sm mr-1" id="exampleInputEmail3" placeholder="Enter email"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                                    <input type="password" className=" -sm mr-1" id="exampleInputPassword3" placeholder="Password"/>
                                </div>
                                <div className="col-sm-auto">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"/>
                                        <label className="form-check-label"> Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <button type="button" id="Cancelbutton" className="btn btn-secondary btn-sm ml-auto" >Cancel</button>
                                <button type="submit" className="btn btn-primary btn-sm ml-1">Sign in</button>        
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
        }
}