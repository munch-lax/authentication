export const registerReducer=(state={status:null},action)=>{
    
    if(action.type==='REGISTER'){
        console.log('i am in reducer if statement')
        return {...state,status:action.payload}
    }
    else if(action.type==='SUCCESS'){
        return {...state,status:action.payload}

    }
    else if(action.type==='ERROR'){
        return {...state,status:action.payload}

    }
    else{
        return state
    }
}