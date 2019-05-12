import * as actionTypes from './actionTypes';

export const next_calendar = ()  => {
    return {
        type: actionTypes.NEXT_CALENDAR,
    }
}

export const prev_calendar = ()  => {
    return {
        type: actionTypes.PREV_CALENDAR,
    }
}

export const change_year = (year)  => {
    return {
        type: actionTypes.CHANGE_YEAR,
        year : year
    }
}

export const initial_calendar = ()  => {
    return {
        type: actionTypes.INITIAL_CALENDAR
    }
}