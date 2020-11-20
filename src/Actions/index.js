import jsonPlaceholder from '../apis/jsonPlacholder';
export const fetchPost = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH__POST', payload: response.data})
    }
}
// export const fetchUser = (id) => {
//     return async dispatch => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({type: 'FETCH__USER', payload: response.data});
//     }
// }
// eslint-disable-next-line no-undef
var _ = require('lodash')
export const fetchUser = function(id){
    return  _.memoize(async function(dispatch){
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({type: 'FETCH__USER', payload: response.data});
    });
};
