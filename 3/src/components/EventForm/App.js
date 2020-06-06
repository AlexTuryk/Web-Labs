import React, { useState, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css' 
import '../DisplayEvents/display.css'
import AddEventForm from './AddEventForm'
import EditEventForm from './EditEventForm'
import EventTable from './EventTable'
/*import AddEventForm from '../EventForm/AddEventForm'*/

const EventForm = () => {
	
	const eventsData = [
		{ id: 1, name: 'Event1', date: '07-06-2020', time: '10:00',description: "Здача лаб" },
		{ id: 2, name: 'Event2', date: '07-06-2020', time: '12:00',description: "Здача розрах" },
		{ id: 3, name: 'Event3', date: '07-06-2020', time: '15:00',description: "Екзамен" },
	]

	const initialFormState = { id: null, name: '', date: '',time:'',description:'' }

	const [ events, setEvents ] = useState(eventsData)
	const [ currentEvent, setCurrentEvent ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addEvent = event => {
		event.id = events.length + 1
		setEvents([ ...events, event ])
	}

	const deleteEvent = id => {
		setEditing(false)

		setEvents(events.filter(event => event.id !== id))
	}

	const updateEvent = (id, updatedEvent) => {
		setEditing(true)

		setEvents(events.map(event => (event.id === id ? updatedEvent : event)))
	}

	const editRow = event => {
		setEditing(true)

		setCurrentEvent({ id: event.id, name: event.name, date: event.date, time: event.time, description: event.description })
		
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					{editing ? (
						<Fragment>
							<h2>Редагувати подію</h2>
							<EditEventForm
								editing={editing}
								setEditing={setEditing}
								currentEvent={currentEvent}
								updateEvent={updateEvent}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Додати подію</h2>
							<AddEventForm addEvent={addEvent} />
						</Fragment>
					)}
				</div>
				<div className="col-6">
					<h2>Список подій</h2>
					<EventTable events={events} editRow={editRow} deleteEvent={deleteEvent} />
				</div>
				
				
			</div>
		</div>
	)
}

export default EventForm
