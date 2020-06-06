import React, { useState, useEffect } from 'react'

const EditEventForm = props => {
  const [ event, setEvent ] = useState(props.currentEvent)

  useEffect(
    () => {
      setEvent(props.currentEvent)
    },
    [ props ]
  ) 
  
    const handleInputChange = even => {
    const { name, value } = even.target

    setEvent({ ...event, [name]: value })
  }

  return (
    <form
      onSubmit={even => {
        even.preventDefault()

        props.updateEvent(event.id, event)
      }}
    >
        <table>
            <tr>
                <td>
                    <label>Name</label>
                </td>
                <td>
                    <input type="text" name="name" value={event.name} onChange={handleInputChange} />
                </td>
            </tr>
            <tr>
                <td>
                    <label>Event Date</label>
                </td>
                <td>
                    <input type="text" name="date" value={event.date} onChange={handleInputChange} />
                </td>
            </tr>
            <tr>
                <td>
                    <label>Event Time</label>
                </td>
                <td>
                    <input type="text" name="time" value={event.time} onChange={handleInputChange} />
                </td>
            </tr>
            <tr>
                <td>
                    <label>Description</label>
                </td>
                <td>
                    <input type="text" name="description" value={event.description} onChange={handleInputChange} />
                </td>
            </tr>
            <button>Оновити подію</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
            Скасувати
            </button>
        </table>
    </form>
  )
}

export default EditEventForm