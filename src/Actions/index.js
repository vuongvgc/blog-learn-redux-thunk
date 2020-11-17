import jsonPlaceholder from '../apis/jsonPlacholder';
export const fetchList = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH__LIST', payload: response})
    }
}
