import axios from 'axios';

export const fetchStaff = () =>
    async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: 'FETCH_USER', payload: res.data });
    };