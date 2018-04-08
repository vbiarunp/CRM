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
            .get('http://localhost:5000/api/login', data)
            .then(resp => {
                // dispatch({
                //     type: 'LOGIN_USER',
                //     data: resp.data
                // })
                // window.location = resp.data.redirect
                console.log(resp)
            })
            .catch(errors => {
                console.log(errors)
            })
    }
}