import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';


class SideDrawer extends React.Component {
    constructor(){
        super();
        this.state={
            donation: false,
        };
    };
    MakingDonation=()=>{
        this.setState(prevState => {
            return { donation: !prevState.donation };
          }
         
          );
    };
    showDonationOptions=()=>{
        if(this.state.donation){
        return(
           <div className="donation-options">
               
                <li><Link to="/donationForm">Donate Random Item</Link></li>
                <li><Link to="/donationForm">see NGO's requirement</Link></li>
                
            </div>
        );
        }
    };
render(){
    let drawerClasses='side-drawer';
    if(this.props.show){
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
                    <li>
                        <Link to="/"  onClick={this.MakingDonation}>
                        <i className="fas fa-hand-holding-heart"></i>
                            
                            <button >
                                Make Donations
                            </button>
                    
                        </Link>
                    </li>
                  
                    {this.showDonationOptions()}
                    <li><Link to="/aboutUs"><i className="fas fa-address-card"></i>About Us</Link></li>
                    <li><Link to="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
                    <li><Link to="/help"><i className="far fa-question-circle"></i>Help</Link></li>
                </ul>
            </div>
            
        </nav>
    );
}
}

export default SideDrawer;