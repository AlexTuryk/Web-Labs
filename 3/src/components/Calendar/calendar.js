import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '../Calendar/main.scss';
import '../Calendar/style.scss';
/*import bootstrap from '@fullcalendar/bootstrap'*/

export default class DemoApp extends React.Component {

  render() {
    return (
      <div id="calendar">
      <FullCalendar 
      
       defaultView="dayGridMonth" 
       locale="uk" 
       themeSystem='bootstrap'
       weekNumbers='true'
       plugins={[ dayGridPlugin]}
       /*header={
         left='prev,next today',
         center='title',
         right='dayGridMonth,timeGridWeek,timeGridDay,listMonth'
       }*/
       editable="true"
        />
        </div>

    )
  }

}