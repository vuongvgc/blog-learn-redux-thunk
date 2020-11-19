// Error: Reducer "post" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.
// eslint-disable-next-line import/no-anonymous-default-export
export default  (state = [], action) => {
    // reducer must return any value besides undefined
    // return null;
    // NOTE bad !
    // return document.getElementById("root").value
    // return Axios.get("/posts")
    // good 
    // return state + action
    switch(action.type){
        case "FETCH__POST":
            return action.payload;
        default:
            return state;
    }
}
