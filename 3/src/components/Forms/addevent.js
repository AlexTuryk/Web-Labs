import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './js/ajaxrequest'
export default class EventForm extends React.Component{

    render(){
        return  (
            <div id="Eventmodal" name='create' className="modal fade show" role="dialog">
            <div className="modal-dialog modal-md" role="content">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Create Event</h4>
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                        </button> 
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">Event Title:</label>
                                <input id='name' type="text"  className="form-control" id="recipient-name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Date_Time" className="col-form-label">Date and Time:</label>
                                <div className="form-group row">
                                    <input id="date" type="date" className="form-control col-md-4 offset-sm-1" id="date-event"/>
                                    <input id="time" type="time" className="form-control col-md-4 offset-sm-1" id="time-event"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="location" className="col-form-label">Location:</label>
                                <input id="location" type="location" className="form-control" id="location"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" className="col-form-label">Event Description:</label>
                                <textarea id="description" className="form-control"  id="message-text" rows="4"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark">Invite Someone</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button"  type="submit" id="send"  name="send_btn" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }

}