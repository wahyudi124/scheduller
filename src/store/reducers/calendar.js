import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import moment from 'moment';
import calendar from 'node-calendar';

const dataarr = (year,month) => {
    var cal = new calendar.Calendar(calendar.MONDAY);
    var datacal = cal.monthdayscalendar(year,month);
    var c = [];
    for(var i = 0 ;i < datacal.length; i++){
        c[i] =(datacal[i].map(value => ({'date': value, 'event': 1, 'mode' : 1 })))
    }
    return c;
    //return datacal;
};

const monthreturnnext = (month) =>{
    if(month === 12) {
        return 1;
    }
    return month + 1
}

const monthreturnprev = (month) =>{
    if(month === 1) {
        return 12;
    }
    return month - 1
}

const nextyear = (month, year) => {
    if(month === 12) {
        return year + 1;
    }
    else return year
}

const prevyear = (month, year) =>{
    if(month === 1) {
        return year - 1;
    }
    else return year
}

const initialState ={
    year : 0,
    month : 0,
    date : 0,
    monthstring : '',
    datearray : [],
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type )
    {
        case actionTypes.NEXT_CALENDAR:
            return updateObject(state, 
                {
                datearray : dataarr(nextyear(state.month,state.year),monthreturnnext(state.month)),
                month : monthreturnnext(state.month), 
                year : nextyear(state.month,state.year),
                monthstring : moment().month(monthreturnnext(state.month-1)  ).format("MMMM"),
            });
        case actionTypes.PREV_CALENDAR:
            return updateObject(state, 
                {
                month : monthreturnprev(state.month),
                year : prevyear(state.month,state.year),
                datearray : dataarr(prevyear(state.month,state.year),monthreturnprev(state.month)),
                monthstring : moment().month(monthreturnprev(state.month-1)).format("MMMM"),
            });
        case actionTypes.INITIAL_CALENDAR:
            return updateObject(state,
                {
                    date : moment().format('DD'),
                    year: moment().format('YYYY'), 
                    month : moment().format('MM'),
                    monthstring : moment().month(moment().format('MM') - 1).format("MMMM"),
                    datearray : dataarr(moment().format('YYYY'), moment().format('MM'))
                })
    }
    return state;
};

export default reducer;

