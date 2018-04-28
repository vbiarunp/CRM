import { SUCCESS_STATUS, REMOVE_STAFF } from '../types';

export default function (state = null, action) {
    switch (action.type) {
        case SUCCESS_STATUS:
            let statusMessage = {
                type: 'success',
                message: 'Added the record'
            };
            return statusMessage;
        case REMOVE_STAFF:
            let removeMessage = {
                type: 'removed',
                message: 'Record removed'
            };
            return removeMessage;
        default:
            return state;
    }
}