import { FETCH_USER, LOGOUT_USER, FETCH_STAFF, GET_SELECTED_TEACHER } from '../types';
import jwt from 'jsonwebtoken';

export default function (state = { user: '', listOfStaff: '', selectedTeacher: '' }, action) {
    switch (action.type) {
        case FETCH_USER:
            let userDetails = jwt.decode(action.payload.token);
            return {
                ...state,
                user: userDetails
            };
        case FETCH_STAFF:
            return {
                ...state,
                listOfStaff: action.payload
            };
        case GET_SELECTED_TEACHER:
            let getDetails = action.payload;
            return {
                ...state,
                selectedTeacher: getDetails
            };
        case LOGOUT_USER:
            return {
                listOfStaff: '',
                user: ''
            };
        default:
            return state;
    }
}