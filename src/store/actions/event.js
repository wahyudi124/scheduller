import * as actionTypes from './actionTypes';

export const add_event = (value)  => {
    return {
        type: actionTypes.ADD_EVENT,
        val : value
    }
}

export const apply_event = (value)  => {
    return {
        type: actionTypes.APPLY_EVENT,
        val : value
    }
}

export const delete_event = (value)  => {
    return {
        type: actionTypes.DELETE_EVENT,
        val : value
    }
}

