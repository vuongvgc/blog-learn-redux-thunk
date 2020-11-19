import jsonPlaceholder from '../apis/jsonPlacholder';
export const fetchPost = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH__POST', payload: response.data})
    }
}
export const fetchUser = (id) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({type: 'FETCH__USER', payload: response.data});
    }
}
