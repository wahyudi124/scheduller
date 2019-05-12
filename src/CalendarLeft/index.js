import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'

class CalendarLeft extends Component{
    render(){
        return(
            <section class="calendar-left">
                <div class="sidebar">
                <p class="subheading">Today</p>
                <h1>Tuesday, <br/>March 20, 2019 </h1>
                <h3 class="primary-color">Running Event</h3>
                <div className= "eventrun">
                <Button 
                color='red'
                content='Holyday'
                
                label={{ basic: true, color: 'red', pointing: 'left', content: 'Now' }}
                />
                </div>
                <div className= "eventrun">
                <Button
                color='blue'
                content='Initial'
                
                label={{ basic: true, color: 'blue', pointing: 'left', content: 'Next' }}
                />
                </div>
                
                {/* <p><a href="#" class="calendar-btn"><i class="fas fa-plus"></i> Add new item</a></p> */}
                </div>
            </section>
        )
    }
}

export default CalendarLeft;