import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer= props=>{

    let drawerClasses='side-drawer';
    if(props.show){
        drawerClasses='side-drawer open'
    }

    return(
        <nav className={drawerClasses}>
            <div className="image-card">
                <div className="image"></div>
            </div>

            <div className="pic-content">
                <h1>Little Deeds</h1>
                <p className="color-highlight">-that make big difference!</p>
            </div>

            <div>
                <ul>
                    <li><Link to="/donationForm">Make Donations</Link></li>
                    <li><Link to="/aboutUs"><i className="fas fa-address-card"></i>About Us</Link></li>
                    <li><Link to="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
                    <li><Link to="/help"><i className="far fa-question-circle"></i>Help</Link></li>
                </ul>
            </div>
            
        </nav>
    );
};

export default SideDrawer;