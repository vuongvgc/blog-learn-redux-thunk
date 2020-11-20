import jsonPlaceholder from '../apis/jsonPlacholder';
import _ from 'lodash';
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
export const fetchPostAndUser = () => async (dispatch, getState) => {
    // console.log("About to fetch post");
    await dispatch(fetchPost());
    // console.log("fetch post");
    const userIds = _.uniq(_.map(getState().post, "userId"))
    // console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
}
// eslint-disable-next-line no-undef
// var _ = require('lodash')
// export const fetchUser = function(id){
//     return  _.memoize(async function(dispatch){
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({type: 'FETCH__USER', payload: response.data});
//     });
// };

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// }
// // memoize funtion 
// var _ = require('lodash')
// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH__USER', payload: response.data});
// })