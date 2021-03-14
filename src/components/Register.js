import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Field,reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {createUser} from '../actions'


 class Register extends Component {

    
    

    showMessage=()=>{
        if(this.props.response!==null){
        
            const status=this.props.response.request.status
        
        
        if(status===201){
            return(
                <div class="ui success message">
                <i class="close icon"></i>
                <div class="header">
                  Your user registration was successful.
                </div>
                <p>You may now log-in with the email you have chosen</p>
              </div>
            )
        }
        else{
            return null
        }
    }
    }
    renderInput(formprops){
        
        return(<div><input type={formprops.type} {...formprops.input}/> <div>{formprops.meta.error}</div></div>)
    }

    onSubmit=(formvalues)=>{
        this.props.createUser(formvalues)
       
    }




    render() {
        return (
            
            <div style={{height:500,width:500,position:'absolute',top:'5rem',left:'33rem'}}>
                <div>{this.showMessage()}</div>
        <div className="ui raised segment">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} class="ui form">

                <div class="field">
                    <label>Name</label>
                    <Field  name="name" component={this.renderInput}/>
                </div>
                
                <div class="field">
                    <label>Email</label>
                    <Field type='email' name="email"  component={this.renderInput}/>
                </div>

                

                <div class="field">
                    <label>Phone No</label>
                    <Field type='tel' name="phoneno"  component={this.renderInput}/>
                </div>

                <div class="field">
                    <label>Company</label>
                    <Field type='text' name="company" component={this.renderInput}/>
                </div>

                <div class="field">
                    <label>Password</label>
                    <Field type='password' name="password" component={this.renderInput}/>
                </div>

              <button class="ui black button" type="submit">Submit</button>

            </form> 
            <br></br>
            <Link to='/'><h4>Already have a account ? SignIn</h4></Link>
        </div>
        
        </div>
        )
    }
}

const validate=(formvalues)=>{
    
    const errors={}
    
    if(!formvalues.email){
      errors.email="Please enter a value"
      
    }
    if(formvalues.phoneno){
        
        if(formvalues.phoneno.length !==10){
        errors.phoneno="Please enter 10 digits"
        }
    }
    return errors;
  }



  
const mapstatetoprops=state=>{
    
    return {response:state.register.status}
}
  



const formWrapped = reduxForm({
    form:'register',
    validate:validate
})(Register)


export default connect(mapstatetoprops,{createUser})(formWrapped)
