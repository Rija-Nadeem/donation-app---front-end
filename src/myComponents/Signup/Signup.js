import React, { Component } from 'react';
import './Signup.css';
import './AccountTypeButton.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {userType} from '../../actions';

const initialState={
    // donor:true,
    // ngo:false,
    userType:"donor",
    name:"",
    email:"",
    password:"",
    address:"",
    number:"",
    regDate:"",
    regNum:"",
    ngoDescription:"",
    selectedGender:"Male",
    nameError:"",
    emailError: "",
    passwordError: "",
    addressError:"",
    numberError:"",
    regDateError:"",
    regNumError:"",
    ngoDescriptionError:"",
}

class Signup extends Component{


//  ************************for backend (start)*****************************
    constructor(){
        super();
        this.state=initialState;
    }
//  ************************for backend (end)*****************************
 
    SignupHandleInputChange=(event, fieldName)=>{
        this.setState({[fieldName]: event.target.value });
    };

    AccountSelectionHandler=(user)=>{
        this.props.userType(user);
        // this.setState((prevState)=>{
        //     return {donor: !prevState.donor,ngo: prevState.donor}
        // });
    };

    validate=(e)=>{
        let nameError="";
        let emailError= "";
        let passwordError = "";
        let numberError="";
        let addressError="";
        let regDateError="";
        let regNumError="";
        let ngoDescriptionError="";

        //checking name
        if(this.state.name){
            if(!isNaN(this.state.name)){
                nameError='name must be a character';
            }
            if((this.state.name.length>0 && this.state.name.length<=2) || this.state.name.length>40){
                nameError='name must be between 2 to 40 characters';
            }
        }
        if(!this.state.name){
        nameError='name cannot be blank';
        }
      
        //checking password
        if(!this.state.password){
            passwordError='password cannot be blank';
        }
        if(this.state.password){
            if((this.state.password.length<5) || (this.state.password.length>21)){
                passwordError='password must be between 6 to 20';
            }
        }

        //checking number
        if(!this.state.number){
            numberError='number cannot be blank';
        }
        if(this.state.number){
            if(this.state.number.length !== 11){
                numberError='must be 11 digits number';
            }
        }

        //checking address
        if(!this.state.address){
            addressError='address cannot be blank';
        }

        //checking email
        if(!this.state.email){
            emailError='email cant be blank';
        }
        if(this.state.email){
            if((!this.state.email.includes('@')) 
                 || (this.state.email.indexOf('@') <= 0) 
                 || (!this.state.email.includes('.')) 
                 || ((this.state.email.charAt(this.state.email.length-4)!=='.') 
                    && (this.state.email.charAt(this.state.email.length-3)!=='.')
                    ) ){
                emailError='invalid email';
            }
        }
        if(this.props.type==='ngo'){
            //checking registration num
            if(!this.state.regNum){
                regNumError='required';
                }
            //checking registration date
            if(!this.state.regDate){
                regDateError='required';
                }
            //checking description
            if(!this.state.ngoDescription){
                ngoDescriptionError='required';
                }
        }
 
        if(emailError || passwordError || numberError|| addressError || nameError || regDateError || regNumError || ngoDescriptionError){
            this.setState({emailError,passwordError,numberError,addressError,nameError,regDateError,regNumError,ngoDescriptionError});
            return false;
        }
        return true;
    };

//  ************************for backend (start)*****************************
    SignupFormSubmitHandler=(e)=>{
        e.preventDefault();
        const isValid=this.validate();
        if (isValid){
            const signupData={
                // donor:this.state.donor,
                // ngo:this.state.ngo,
                userType:this.props.type,
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                address:this.state.address,
                number:this.state.number,
                regDate:this.state.regDate,
                regNum:this.state.regNum,
                ngoDescription:this.state.ngoDescription,
                selectedGender:this.state.selectedGender,
            }
            //clear form
            this.setState(initialState);
            console.log(signupData);
            
        }   
       
    };
//  ************************for backend (end)*****************************

    isNgo=()=>{
        if(this.props.type==='ngo'){
            
        return(
            
            <div className="ngo-form">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <i className="fas fa-calendar-day"></i>
                            <small style={{color:"#6c6c6c", position:"relative", left:"-25px"}}>Registration Date</small>
                            <input type="date" 
                                    name="reg-date" 
                                    id="reg-date" 
                                    className="form-control" 
                                    placeholder="Registration Date" 
                                    onChange={event=> this.SignupHandleInputChange(event, "regDate")} 
                                    value={this.state.regDate} 
                                    autoComplete="off"/>
                            <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.regDateError}</div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <i className="fas fa-hashtag"></i>
                            <input type="number" 
                                    name="reg-num" 
                                    id="reg-num" 
                                    className="form-control" 
                                    placeholder="Registration Num" 
                                    onChange={event=> this.SignupHandleInputChange(event, "regNum")} 
                                    value={this.state.regNum} 
                                    autoComplete="off"/>
                            <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.regNumError}</div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <i className="far fa-file-alt"></i>
                    <textarea style={{height:"100px"}} name="description" 
                                id="description" 
                                className="form-control" 
                                placeholder="Add Description" 
                                rows="10" 
                                cols="50"
                                onChange={event=> this.SignupHandleInputChange(event, "ngoDescription")} 
                                value={this.state.ngoDescription} 
                                autoComplete="off" >
                    </textarea>
                    <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.ngoDescriptionError}</div>
                </div>
            </div>
        );
        }
    };
    
    render(){
    return(
        <div className="my-signup-page"> 
            <div className="container" >
                    <h1 className="blue-heading sigup-page-heading">Choose Account Type</h1>
                    <div className="account-pic-container">
                    <div className="row">
                        <div className="col-6 main-pic-container ">
                            <button className="account-button" onClick={()=>this.AccountSelectionHandler('donor')}>
                                <div className="pic-border">
                                    <div className="pic-container ">
                                        <div className='pic1'></div>
                                        <h3 className="tag">Donor</h3>
                                    </div>
                                {this.props.type==='donor' ? <i className="fas fa-certificate"></i> : null}
                                </div>
                            </button>
                        </div>
                        <div className="col-6  main-pic-container ">
                            <button className="account-button" onClick={()=>this.AccountSelectionHandler('ngo')}>
                                <div className="pic-border">
                                    <div className="pic-container ">
                                        <div className='pic2'></div>
                                        <h3 className="tag">NGO</h3>
                                    </div>
                                {this.props.type==='ngo' ? <i className="fas fa-certificate"></i> : null}
                                </div>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="instructions">
                        <Link to="/signup" className="no-decor">Not sure what to choose?</Link>
                        <p>Hello! Please fill out the form below to get started</p>
                    </div>
                    {/* form */}
                    <form action="" className="main-donor-signup-form" onSubmit={this.SignupFormSubmitHandler} noValidate>
                        <div className="form-group">
                            <i className="fas fa-user-tie"></i>
                            <input type="text" 
                                    name={this.state.ngo?"org-name":"username"} 
                                    id={this.state.ngo?"org-name":"username"} 
                                    className="form-control" 
                                    placeholder={this.state.ngo?"Organization Name":"Full Name"} 
                                    onChange={event=> this.SignupHandleInputChange(event, "name")} 
                                    value={this.state.name} 
                                    autoComplete="off"
                                    />
                            <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.nameError}</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <i className="fas fa-at"></i>
                                    <input type="email" 
                                            name="email" 
                                            id="email" 
                                            className="form-control" 
                                            placeholder="Email" 
                                            onChange={event=> this.SignupHandleInputChange(event, "email")} 
                                            value={this.state.email} 
                                            autoComplete="off"
                                            />
                                    <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.emailError}</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" 
                                            name="password" 
                                            id="password" 
                                            className="form-control" 
                                            placeholder="Password" 
                                            onChange={event=> this.SignupHandleInputChange(event, "password")}  
                                            value={this.state.password} 
                                            autoComplete="off"
                                            />
                                    <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.passwordError}</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <i className="fas fa-map-marker-alt"></i>
                            <input type="text" 
                                    name="address" 
                                    id="address" 
                                    className="form-control address-field" 
                                    placeholder="Address" 
                                    onChange={event=> this.SignupHandleInputChange(event, "address")}  
                                    value={this.state.address} 
                                    autoComplete="off"
                                    />
                            <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px",marginTop:"-10px"}}>{this.state.addressError}</div>
                        </div>

                        <div className="row field-spacer">
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <i className="fas fa-phone-alt"></i>
                                    <input type="number" 
                                            name="number" 
                                            id="number" 
                                            className="form-control number-field" 
                                            placeholder="Phone Number" 
                                            onChange={event=> this.SignupHandleInputChange(event, "number")} 
                                            value={this.state.number} 
                                            autoComplete="off"
                                            />
                                    <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.numberError}</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group gender-field">
                                   <small style={{color:"#6c6c6c"}}>Gender</small>
                                    <select name="gender" 
                                            value={this.state.selectedGender}  
                                            onChange={event=> this.SignupHandleInputChange(event, "selectedGender")}  
                                            id="gender" 
                                            className="form-control signup-gender">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {this.isNgo()}
                        
                        
                     

                    <button type="submit" style={{outline:"none"}} className="my-btn signup-btn">Sign Up</button>
                    <p ><Link to="/" style={{color: "#6c6c6c"}}>Back to Home Page</Link></p>
                    </form>

                </div>
                
            
        </div>
       
    );
    }
}
const mapStateToProps=(state)=>{
    return {type: state.userType}
}
export default connect(mapStateToProps,{userType})(Signup);