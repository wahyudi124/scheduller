import React,{Component} from 'react';



class DateItem extends Component{
    render(){
    let className = "calendar-day " + this.props.mode;
    let eventView;
    if(this.props.ecount !== 0){
        eventView = <span class="calendar-event">{this.props.ecount}</span> 
    }

    return(
        <div class={className}>
            <span class="calendar-date">{this.props.date}</span>
            <br/>
            {eventView}
        </div>
        );
    }
}

export default DateItem;