import React from 'react'

const EventTable = props => (
  <table>
    <thead>
      <tr>
      <th>Name</th>
      <th>Date</th>
      <th>Time</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  {props.events.length > 0 ? (
      props.events.map(event => (
        <tr key={event.id}>
          <td> {event.name} </td>
          <td> {event.date} </td>
          <td> {event.time} </td>
          <td>{event.description}</td>
          <td>
            <button
              onClick={() => {
                props.editRow(event)
              }}
              className="button muted-button"
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteEvent(event.id)}
              className="button muted-button"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No events</td>
      </tr>
    )}
  </tbody>
</table>
)
export default EventTable
