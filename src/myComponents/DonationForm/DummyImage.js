import React, { Component } from 'react';
//import './AccountTypeButton.css';
import './DummyImage.css';

class DummyImage extends Component{
    render(){
    return(
        <div className="account-button">
                <div className="pic-container ">
                <img src={this.props.picture} alt="no img" className="set-img-in-div"/>
                </div>
            </div>
        
    ); 
  }
}

export default DummyImage;