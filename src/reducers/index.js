import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const userTypeReducer=(userType='donor', action)=>{
    if(action.type === 'CHANGE_OF_USER_TYPE'){
        return action.payload;
    }
    return userType;
};
export default combineReducers({
    userType: userTypeReducer,
    form: formReducer
})