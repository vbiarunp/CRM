import { FETCH_USER, LOGOUT_USER, FETCH_STAFF } from '../types';
import jwt from 'jsonwebtoken';

export default function (state = { user: '', listOfStaff: '' }, action) {
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
        case LOGOUT_USER:
            return {
                listOfStaff: '',
                user: ''
            };
        default:
            return state;
    }
}