import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import Footer from '../Footer/Footer';
import './Profile.css';
import item1 from '../../images/book.png';

class Profile extends React.Component{
    state = {
        siderDrawerOpen: false,
        donor: true
      };
    
      drawerToggleHandler = () => {
        this.setState(prevState => {
          return { siderDrawerOpen: !prevState.siderDrawerOpen };
        });
      };
    
      backdropClickHandler = () => {
        this.setState({ siderDrawerOpen: false });
      };
    render(){
        let backdrop;
    if (this.state.siderDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
        return(
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleHandler} about={true}/>
                <SideDrawer about={true} show={this.state.siderDrawerOpen} />
                {backdrop}
                <div className="alert alert-color text-center " role="alert">
                ThankYou so much for your donations
                </div>
                <div className="container item-card-container">
                    <div class="card">
                        <img src={item1} alt=".." className="card-image"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={item1} alt=".." className="card-image"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={item1} alt=".." className="card-image"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={item1} alt=".." className="card-image"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={item1} alt=".." className="card-image"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;