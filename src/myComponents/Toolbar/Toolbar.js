import React from 'react';
import {Link} from 'react-router-dom';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../images/logo-transparent-background.png';




const Toolbar = props =>{
   
    return(
        <header className="toolbar">
            <nav className="toolbar-nav">
                
                <div className="toolbar-logo">
                    <span className="logo"><img alt="logo" src={Logo}/></span>
                    <Link to="/">
                        <div>Little Deeds</div>
                    </Link>
                </div>
                <div className="spacer"></div>
               
                <div className="toolbar-nav-items">
                 
                    <ul>
                    <li>
                    
                  
                    <div className="dropdown">
                        <button className="btn btn-outline-dark dropdown-toggle my-dropdown-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Make Donations
                            <span className="caret"></span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/donationForm">Donate Random Item</Link>
                            <Link className="dropdown-item" to="/donationForm">see NGO's requirement</Link>
                        </div>
                    </div>
                    </li>
                    <li><Link to="/aboutUs">About us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    </ul>
                </div>
                <div className="toolbar-toggle-button"><DrawerToggleButton click={props.drawerClickHandler}/></div>
            </nav>
        </header>
    );
};

export default Toolbar;