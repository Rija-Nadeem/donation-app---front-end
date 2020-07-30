import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import Footer from '../Footer/Footer';
import './Profile.css';
import Card from '../Card/Card';
import item1 from '../../images/donation1.jpg';
import item2 from '../../images/donation2.jpg';
import item3 from '../../images/donation3.jpg';

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
                    <Card 
                        itemImg={item2} 
                        title='Card title' 
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        status="Rejected"/>
                    <Card 
                        itemImg={item1} 
                        title='Card title' 
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        status="Approved"/>
                    <Card 
                        itemImg={item3} 
                        title='Card title' 
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                        status="Pending"/>
                  
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Profile;