import { SUCCESS_STATUS } from '../types';

export default function (state = null, action) {
    switch (action.type) {
        case SUCCESS_STATUS:
            let statusMessage = {
                type: 'success',
                message: 'Added the record'
            };
            return statusMessage;
        default:
            return state;
    }
}