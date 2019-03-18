import React,{Component} from 'react';
import DateLayout from './DateLayout';

class CalendarRight extends Component{
    render(){
        return(
        <section class="calendar-right">
            <div class="calendar">
            <DateLayout/>
            </div>
        </section>
        )
    }
}


export default CalendarRight;