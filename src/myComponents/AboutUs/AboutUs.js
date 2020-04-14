import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import handHeart from '../../images/hand-heart.jpg';
import classRoom from '../../images/class.jpg';
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
// import kid from '../../images/grayscale-kid.jpg';
import './AboutUs.css';

class AboutUs extends React.Component {
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
            <div className="about-page" style={{ height: "100%" }}>
                 <Toolbar drawerClickHandler={this.drawerToggleHandler} about={true}/>
                <SideDrawer about={true} show={this.state.siderDrawerOpen} />
                {backdrop}
                <div className="about-cover-container">
                    <div className="about-cover"></div>
                </div>

                <div style={{ margin: "0 auto"}}>
                <section className="row about-detail-section1">
                    <div className="col-md-6 grid "  >
                        <div className="side-content">
                            <h2 className="blue-heading">Our Story</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Consequuntur sunt excepturi dictaConsequuntur sunt excepturi dicta ex, placeat ab esse, iure harum eaque 
                            fuga asperiores distinctio amet temporibus enim illum molestiae neque ad 
                            similique possimus repellendus velit! Quaer ex, placeat ab esse, iure harum eaque 
                            fuga asperiores distinctio amet temporibus enim illum molestiae neque ad 
                            similique possimus repellendus velit! Quaerat nihil nemo, aliquam consectetur 
                            debitis illum. Excepturi cum, quaerat minus odit dolorem recusandae, debitis reprehenderit 
                            voluptate?</p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Nostrum suscipit placeat amet vel esse soluta dolorum nesciunt 
                            dolores, possimus sint.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 grid">
                        <div className="about-small-img">
                            <img src={handHeart} alt="no" className="about-set-img-in-div" />
                        </div>
                    
                    </div>
                </section>
                

                
                <section className="row about-detail-section2">
                    <div className="col-md-6 grid" >
                        <div className="side-content">
                            <h2 className="blue-heading">Our Mission</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Consequuntur sunt excepturi dicta ex, placeat ab esse, iure harum eaque 
                            fuga asperiores distinctio amet temporibus enim illum molestiae neque ad 
                            similique possimus repellendus velit! QuaerConsequuntur sunt excepturi dicta ex, placeat ab esse, iure harum eaque 
                            fuga asperiores distinctio amet temporibus enim illum molestiae neque ad 
                            similique possimus repellendus velit! Quaerat nihil nemo, aliquam consectetur 
                            debitis illum. Excepturi cum, quaerat minus odit dolorem recusandae, debitis reprehenderit 
                            voluptate?</p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Nostrum suscipit placeat amet vel esse soluta dolorum nesciunt 
                            dolores, possimus sint.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 grid">
                        <div className="about-small-img">
                            <img src={classRoom} alt="no" className="about-set-img-in-div" />
                        </div>
                    
                    </div>
                </section>
                <section  >
                    <h1 className="blue-heading">Our Partners</h1>
                    <div className="container about-partners">
                    <img class="img-rounded" src={classRoom} alt="no"/>
                    <img class="img-rounded" src={classRoom} alt="no"/>
                    <img class="img-rounded" src={classRoom} alt="no"/>
                    <img class="img-rounded" src={classRoom} alt="no"/>
                    <img class="img-rounded" src={classRoom} alt="no"/>
                    <img class="img-rounded" src={classRoom} alt="no"/>
                    <img class="img-rounded" src={classRoom} alt="no"/>
                    <img class="img-rounded" src={classRoom} alt="no"/>
                        
                    </div>
                </section>
            </div>

            
            </div>
        );
    }
}

export default AboutUs;