import {LOGIN_REQUEST} from '../actions';
const initState = {

}
const reducer = (state=initState,action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return state;
        default:
            return state;
    }
}
export default reducer;