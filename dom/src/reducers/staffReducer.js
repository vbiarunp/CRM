import { FETCH_USER, LOGOUT_USER } from '../types';
import jwt from 'jsonwebtoken';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            let users = jwt.decode(action.payload.token);
            return users;
        case LOGOUT_USER:
            return 'logout';
        default:
            return state;
    }
}