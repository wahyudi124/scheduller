import React,{Component} from 'react';



class DateItem extends Component{

    eventcal() {
        if(this.props.ecount !== 0)
        return <span class="calendar-event">{this.props.ecount}</span> 
    }

    render(){
    let className = "calendar-day " + this.props.mode;
    return(
        <div class={className}>
            <span class="calendar-date">{this.props.date}</span>
            <br/>
            {this.eventcal()}
        </div>
        );
    }
}

export default DateItem;