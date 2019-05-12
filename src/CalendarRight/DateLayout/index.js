import React,{Component} from 'react';
import DateItem from './DateItem';
import Header from './Header';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';


class DateLayout extends Component{




    componentWillMount(){
        this.props.currentCalendar();
        
    }

    render(){
      //  console.log(this.state.calendata);
       if(this.props.datearray !== null) {
        
        return(
            <section>
            <Header month = {this.props.monthname} year= {this.props.year}/>
            <section class="calendar-row">
                <div class="calendar-day day-name">Mon</div>
                <div class="calendar-day day-name">Tue</div>
                <div class="calendar-day day-name">Wed</div>
                <div class="calendar-day day-name">Thu</div>
                <div class="calendar-day day-name">Fri</div>
                <div class="calendar-day day-name">Sat</div>
                <div class="calendar-day day-name">Sun</div>
            </section>
            
            {this.props.datearray.map((row) =>
                 <section class="calendar-row"> 
                    {row.map((date) =>
                         
                            
                             <DateItem date = {date.date} ecount = {date.event} mode="weekend"/>
                            
                         
                        )
                    }
                 </section>
                )
            }
            </section>
        )
       }
       else if (this.props.datearray === null)
       {
           return null;
       }

    }
}

const MSTP = state =>{
    return{
        
        datearray : state.cal.datearray,
        year : state.cal.year,
        monthname : state.cal.monthstring
    }
}

const MDTP = dispatch => {
    return {
         currentCalendar : () => dispatch(actionCreators.initial_calendar())
    }
}

export default connect(MSTP,MDTP)(DateLayout);