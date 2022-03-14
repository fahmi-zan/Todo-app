import axios from 'axios'

export const fetchPost = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('https://peaceful-citadel-71310.herokuapp.com/todo', {
            headers: { 'token': getToken }
        })
            .then(({ data }) => {
                // console.log(data);
                dispatch(setPost(data.data))
            })
            .catch(err => {
                console.log(err.response);
            })

    }
}

export const setPost = (payload) => {
    return {
        type: "SET_POST", payload
    }
}