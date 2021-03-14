import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Field,reduxForm} from 'redux-form'
import {getUser} from '../actions'
import {connect} from 'react-redux'


 class Login extends Component {


    renderInput(formprops){
        
        return(
        <div>
          <input type={formprops.type} {...formprops.input}/>
          <div>
            {formprops.meta.error}
          </div>
        </div>)
    }

    onSubmit=(formvalues)=>{
        this.props.getUser(formvalues)
       
    }

    validation=()=>{
      const item=this.props.value
      let username=localStorage.getItem('username')
      if(item=='success'){
        return(
          <div class="ui success message">
                <i class="close icon"></i>
                <div class="header">
                  welcome {username}
                </div>
                <p>This was made by Rahul Gurnani</p>
        </div>
        )
      }
      else if(item==='error'){
        return (<h3>Please check your credentials</h3>)
      }
      else{
        return null
      }
    }


    




    render() {
        return (
          <div style={{height:500,width:500,position:'absolute',top:'13rem',left:'33rem'}}>
        <div className="ui raised segment">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} class="ui form">
                <div className="field">
                    <label>Email</label>
                    <Field type='email' name="email"  component={this.renderInput}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <Field type='password' name="password" component={this.renderInput}/>
                </div>

              <button className="ui black button" type="submit">Submit</button>
            </form> 
            <br></br>
            <Link to='/register'><h4>Don't have a account ? SignUp</h4></Link>
        </div>
        <div>{this.validation()}</div>
        </div>
        )
    }
}

const validate=formvalues=>{
  
  const errors={}
  
  if(!formvalues.email){
    errors.email="Please enter a value"
    
  }
  return errors;
}


const mapstatetoprops=(state)=>{
  
  return {value:state.register.status}
}



const formwrapper= reduxForm({
    form:'Login',
    validate:validate
})(Login)


export default connect(mapstatetoprops,{getUser})(formwrapper)

