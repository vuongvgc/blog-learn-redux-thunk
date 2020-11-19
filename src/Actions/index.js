import jsonPlaceholder from '../apis/jsonPlacholder';
export const fetchPost = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH__POST', payload: response.data})
    }
}
