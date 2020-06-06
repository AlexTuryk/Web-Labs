import React, { useState, Fragment } from 'react'
import './display.css'
import 'bootstrap/dist/css/bootstrap.css' 
import EventTable from './eventtable'
import EditEventForm from './editform'
import AddEventForm from '../Forms/addevent'
const App = () => {

	const eventsData = [
		{ id: 1, name: 'Event1', date: '07-06-2020', time: '10:00',description: "Здача лаб" },
		{ id: 2, name: 'Event2', date: '07-06-2020', time: '12:00',description: "Здача розрах" },
		{ id: 3, name: 'Event3', date: '07-06-2020', time: '15:00',description: "Екзамен" },
	]

	const initialFormState = { id: null, name: '', date: '',time:'',description:'' }


	const [ events, setEvents ] = useState(eventsData)
	const [ currentEvent, setcurrentEvent ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	
	const addEvent = event => {
		event.id = events.length + 1
        setEvents([ ...events, event ])
        this.addEvent = this.addEvent.bind(this);
	}

	const deleteevent = id => {
		setEditing(false)

		setEvents(events.filter(event => event.id !== id))
	}

	const updateEvent = (id, updatedEvent) => {
		setEditing(false)

		setEvents(events.map(event => (event.id === id ? updatedEvent : event)))
	}

	const editRow = event => {
		setEditing(true)

		setcurrentEvent({ id: event.id, name: event.name, date: event.date, time: event.time, description: event.description })
	}

	return (
		<div className="container">
			<h1>Список подій</h1>
			<div className="flex-row">
				<div className="flex-large">
                    <Fragment>
                        <h2>Редагувати подію</h2>
                        <EditEventForm
                            editing={editing}
                            setEditing={setEditing}
                            currentEvent={currentEvent}
                            updateEvent={updateEvent}
                        />
                    </Fragment>
					
                    {<Fragment>
                        <AddEventForm addEvent={addEvent} />
                    </Fragment>}
					
				</div>
				<div className="flex-large">
					
					<EventTable events={events} editRow={editRow} deleteevent={deleteevent} />
				</div>
			</div>
		</div>
	)
}

export default App