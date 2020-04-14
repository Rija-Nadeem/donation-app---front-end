import {combineReducers} from 'redux';
const userTypeReducer=(userType='donor', action)=>{
    if(action.type === 'CHANGE_OF_USER_TYPE'){
        return action.payload;
    }
    return userType;
};
export default combineReducers({
    userType: userTypeReducer
})