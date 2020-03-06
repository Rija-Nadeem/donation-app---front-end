import React, { Component } from 'react';
import './AccountTypeButton.css';

class AccountTypeButton extends Component{
    render(){
    return(
        <button className="account-button" onClick={this.props.AccountHandler}>
             <div className="pic-border">
                <div className="pic-container ">
                    <div className={this.props.picture}></div>
                    <h3 className="tag">{this.props.tagname}</h3>
                </div>
               {this.props.checked ? <i className="fas fa-certificate"></i> : null}
            </div>
        </button>
    ); 
  }
}

export default AccountTypeButton;