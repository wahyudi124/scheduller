import React, {Component} from 'react';

class CalendarLeft extends Component{
    render(){
        return(
            <section class="calendar-left">
                <div class="sidebar">
                <p class="subheading">Today</p>
                <h1>Tuesday, <br/>January 1st </h1>
                <h3 class="primary-color">4 Items</h3>
                <ul class="calendar-events">
                    <li>
                    <p><strong>8:00 AM</strong><br/>
                    Team Meeting</p>
                    </li>
                    <li>
                    <p><strong>10:00 AM</strong><br/>
                    Call Jane</p>
                    </li>
                    <li>
                    <p><strong>12:00 PM</strong><br/>
                    Lunch with John</p>
                    </li>
                    <li>
                    <p><strong>7:00 PM</strong><br/>
                    Dinner with Jane</p>
                    </li>
                </ul>
                {/* <p><a href="#" class="calendar-btn"><i class="fas fa-plus"></i> Add new item</a></p> */}
                </div>
            </section>
        )
    }
}

export default CalendarLeft;