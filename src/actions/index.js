import axios from "axios"
import { form } from "redux-forms/lib/containers"


export const createUser = (formvalues)=> async dispatch=>{
    const response = await axios.post('https://603dc72748171b0017b2da58.mockapi.io/api/v1/login',{
        
    "name":formvalues.name,
    "email":formvalues.email,
    "phone":Number(formvalues.phoneno),
    "company":formvalues.company,
    "password":formvalues.password,


})
    
    dispatch({type:'REGISTER',payload:response})
}

export const getUser=(formvalues)=>async dispatch=>{
    const response = await axios.get('https://603dc72748171b0017b2da58.mockapi.io/api/v1/login',{
        params:{email:formvalues.email}
    })
    console.log(response)
    console.log(formvalues.password,response.data[0].password)
    if(formvalues.password===response.data[0].password && formvalues.email===response.data[0].email){
        console.log("successfully made")
        localStorage.setItem('username',response.data[0].name)
        dispatch({type:'SUCCESS',payload:'success'})
       
        
    }
    else{
        dispatch({type:'ERROR',payload:'error'})
    }
}