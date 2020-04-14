export const userType=(type)=>{

    //return an action
    return{
        type:'CHANGE_OF_USER_TYPE',
        payload: type
    };
 }; 