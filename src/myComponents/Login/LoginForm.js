import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import './LoginForm.css';
import FaceImage from '../../images/peo.png';



class LoginForm extends Component{
renderError(meta){
    if( meta.error && meta.touched){
        return(
            <div style={{fontSize:"12.8px", color:"#DC3545", textAlign:"left", paddingTop:"3px", marginLeft:"5px"}}>{meta.error}</div>
        );
    }
}
    renderEmailInput=(formProps)=>{
        const className=`form-group ${formProps.meta.error && formProps.meta.touched? 'error' : '' } `
        return(
            <div className={className}>
                <i className="fas fa-at"></i>
                <input type="email" 
                        className="form-control" 
                        placeholder="Enter Email"
                        id="login-email"
                        {...formProps.input}
                        autoComplete="off"/>
                   {this.renderError(formProps.meta)}
            </div>

        );
    }
    renderPasswordInput=(formProps)=>{
        const className=`form-group ${formProps.meta.error && formProps.meta.touched? 'error' : '' } `
        return(
            <div className={className}>
                    <i className="fas fa-lock"></i>
                <input type="password" 
                        className="form-control" 
                        placeholder="Enter Password"
                        id="login-password"
                        {...formProps.input}
                        autoComplete="off"/>
                  {this.renderError(formProps.meta)}
            </div>
        );
    }
    onSubmit=(formValues)=>{
        console.log(formValues);
    }
    render(){
        return(
            <div className="my-login-background">
            <div className="modal-dialog text-center">
                <div className="col-sm-12 main-section">
                    <div className="modal-content">
                    <div className="dark-border">
                        <div className="col-12 user-img">
                            <img src={FaceImage} alt="no img"/>
                        </div>
                        <div className="col-12 form-input" >
                        <form className="my-login-form" onSubmit={this.props.handleSubmit(this.onSubmit)} noValidate>
                            <Field name="loginEmail" component={this.renderEmailInput} />
                            <Field name="loginPassword" component={this.renderPasswordInput}/>
                            <button type="submit" className="login-btn my-btn">Login</button>
                        </form>
                        </div>
                        <div className="col-12 forgot">
                            <p><a href="/">Forgot Password?</a></p>
                            <p><Link to="/signup">Don't have an account?</Link></p>
                            <p><Link to="/">Back to Home Page</Link></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }

}
const Loginvalidate=(formValues)=>{
    const errors={};
    const validEmail=/^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!formValues.loginEmail ){
        errors.loginEmail="you must enter an email";
    }else if(!validEmail.test(formValues.loginEmail)){
        errors.loginEmail="invalid email";
    }
    
    if(!formValues.loginPassword){
        errors.loginPassword="you must enter password";
    } else if ((formValues.loginPassword.length<5) || (formValues.loginPassword.length>20)){
        errors.loginPassword="Password must be between 6 to 20";
    }
    return errors;
}
export default reduxForm({
    form: 'loginForm',
    validate:Loginvalidate
})(LoginForm);