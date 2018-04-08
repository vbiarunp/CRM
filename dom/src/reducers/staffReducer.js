import { FETCH_USER, LOGOUT_USER } from '../types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload.username;
        case LOGOUT_USER:
            return 'logout';
        default:
            return state;
    }
}