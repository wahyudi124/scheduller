import React,{Component} from 'react';
import EventLayout from './EventLayout';
import DateLayout from './DateLayout';
import EvformLayout from './EvformLayout';

class CalendarRight extends Component{
    render(){
        return(
        <section class="calendar-right">
            <div class="calendar">
            <EventLayout/>
            </div>
        </section>
        )
    }
}

export default CalendarRight;


