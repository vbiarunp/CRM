import axios from 'axios';

// export const fetchLogin = (data) =>
// async dispatch => {
//     const res = await axios.post('http://localhost:5000/api/login', data);
//     console.log(res);
//     debugger;
//     dispatch({ type: 'FETCH_USER', payload: res.data });
// };

export const fetchLogin = (data) => {
    return (dispatch) => {
        axios
            .post('http://localhost:5000/api/login', data)
            .then(resp => {
                dispatch({ type: 'FETCH_USER', payload: resp.data });
            })
            .catch(errors => {
                console.log(errors)
            })
    }
}