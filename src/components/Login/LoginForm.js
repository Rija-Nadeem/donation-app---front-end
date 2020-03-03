import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LoginForm.css';
import FaceImage from '../../images/peo.png';

const LoginInitialState={
    loginEmail:"",
    loginPassword:"",
    loginEmailError: "",
    loginPasswordError: "",
}

class LoginForm extends Component{
//  ************************for backend (start)*****************************
    constructor(){
        super();
        this.state=LoginInitialState;
    }
//  ************************for backend (end)*****************************

    LoginHandleInputChange=(event, fieldName)=>{
        this.setState({[fieldName]: event.target.value });
    };

    loginFormValidate=()=>{
        let loginEmailError= "";
        let loginPasswordError = "";

        //checking  login email
        if(!this.state.loginEmail){
            loginEmailError='email cant be blank';
        }
        if(this.state.loginEmail){
            if((!this.state.loginEmail.includes('@')) 
                 || (this.state.loginEmail.indexOf('@') <= 0) 
                 || (!this.state.loginEmail.includes('.')) 
                 || ((this.state.loginEmail.charAt(this.state.loginEmail.length-4)!=='.') 
                    && (this.state.loginEmail.charAt(this.state.loginEmail.length-3)!=='.')
                    ) ){
                loginEmailError='invalid email';
            }
        }

        //checking password
        if(!this.state.loginPassword){
            loginPasswordError='Password cannot be blank';
        }
        if(this.state.loginPassword){
            if((this.state.loginPassword.length<5) || (this.state.loginPassword.length>21)){
                loginPasswordError='Password must be between 6 to 20';
            }
        }

        if(loginEmailError || loginPasswordError){
            this.setState({loginEmailError,loginPasswordError});
            return false;
        }
        return true;

    };

//  ************************for backend (start)*****************************

    LoginFormSubmitHandler=(e)=>{
        e.preventDefault();
        const isLoginFormValid=this.loginFormValidate();
        if (isLoginFormValid){
            const loginData={
                loginEmail:this.state.loginEmail,
                loginPassword:this.state.loginPassword,
            }
            //clear form
            this.setState(LoginInitialState);
            console.log(loginData);
        }   

    };
//  ************************for backend (end)*****************************

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
                        <div className="col-12 form-input">
                        <form className="my-login-form" onSubmit={this.LoginFormSubmitHandler} noValidate>
                            <div className="form-group ">
                                <i className="fas fa-at"></i>
                                <input type="email" 
                                        className="form-control" 
                                        placeholder="Enter Email"
                                        name="login-email" 
                                        id="login-email"
                                        onChange={event=> this.LoginHandleInputChange(event, "loginEmail")} 
                                        value={this.state.loginEmail} 
                                        autoComplete="off"/>
                                <div style={{fontSize:"12.8px", color:"#DC3545"}}>{this.state.loginEmailError}</div>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-lock"></i>
                                <input type="password" 
                                        className="form-control" 
                                        placeholder="Enter Password"   
                                        name="login-password" 
                                        id="login-password"
                                        onChange={event=> this.LoginHandleInputChange(event, "loginPassword")} 
                                        value={this.state.loginPassword} 
                                        autoComplete="off"/>
                                <div style={{fontSize:"12.8px", color:"#DC3545"}}>{this.state.loginPasswordError}</div>
                            </div>
                            <button type="submit" className="login-btn my-btn">Login</button>
                        </form>
                        </div>
                        <div className="col-12 forgot">
                            <p><a href="/">Forgot Password?</a></p>
                            <p><Link to="/signup">Don't have an account?</Link></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }

}
export default LoginForm;