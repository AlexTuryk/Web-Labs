import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const AddEventForm = props => {
	const initialFormState = { id: null, name: '', date: '',time:'',description:'' }
	const [ event, setEvent ] = useState(initialFormState)

	const handleInputChange = even => {
		const { name, value } = even.target

		setEvent({ ...event, [name]: value })
	}

	return (
		<form
			onSubmit={even => {
				even.preventDefault()
				if (!event.name || !event.date || !event.time || !event.description) return

				props.addEvent(event)
				setEvent(initialFormState)
			}}
		>
			<label htmlFor="recipient-name" className="col-form-label">Event Title:</label>
            <input id='name' type="text" name="name" value={event.name} onChange={handleInputChange} className="form-control" id="recipient-name"/>
			<div className="form-group">
				<label htmlFor="Date_Time" className="col-form-label">Date and Time:</label>
				<div className="form-group row">
					<input id="date" type="date" name="date" value={event.date} onChange={handleInputChange} className="form-control col-md-4 offset-sm-1" id="date-event"/>
					<input id="time" type="time" name="time" value={event.time} onChange={handleInputChange} className="form-control col-md-4 offset-sm-1" id="time-event"/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="message-text" className="col-form-label">Event Description:</label>
				<textarea id="description" name="description" value={event.description} onChange={handleInputChange} className="form-control"  id="message-text" rows="4"></textarea>
			</div>
			<button type="submit">Add event</button>
		</form>
	)
}

export default AddEventForm

/*import React, { useState } from 'react'

const AddEventForm = props => {
	const initialFormState = { id: null, name: '', date: '',time:'',description:'' }

	const [ event, setEvent ] = useState(initialFormState)

	const handleInputChange = even => {
		const { name, value } = even.target

		setEvent({ ...event, [name]: value })
	}

	return (
		<form
			onSubmit={even => {
				even.preventDefault()
				if (!event.name || !event.eventname) return

				props.addEvent(event)
				setEvent(initialFormState)
			}}
		>
			<div id="Eventmodel" name='create' className="modal fade show" role="dialog">
                <div className="modal-dialog modal-md" role="content">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Create Event</h4>
                            <button type="button" className="close" data-dismiss="modal">
                                &times;
                            </button> 
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">Event Title:</label>
                                <input id='name' type="text" name="name" value={event.name} onChange={handleInputChange} className="form-control" id="recipient-name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Date_Time" className="col-form-label">Date and Time:</label>
                                <div className="form-group row">
                                    <input id="date" type="date" name="date" value={event.date} onChange={handleInputChange} className="form-control col-md-4 offset-sm-1" id="date-event"/>
                                    <input id="time" type="time" name="time" value={event.time} onChange={handleInputChange} className="form-control col-md-4 offset-sm-1" id="time-event"/>
                                </div>
                            </div>
                            {<div className="form-group">
                                <label htmlFor="location" className="col-form-label">Location:</label>
                                <input id="location" type="location" className="form-control" id="location"/>
                            </div>}
                            <div className="form-group">
                                <label htmlFor="message-text" className="col-form-label">Event Description:</label>
                                <textarea id="description" name="description" value={event.description} onChange={handleInputChange} className="form-control"  id="message-text" rows="4"></textarea>
                            </div>
                        </div>
                            <div className="modal-footer">
                                {/*<button type="button" className="btn btn-dark">Invite Someone</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>}
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                </div>
            </div>
		</form>
	)
}

export default AddEventForm*/
