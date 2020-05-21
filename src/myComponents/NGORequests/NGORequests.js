import React from 'react';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import './NGORequests.css';

class NGORequests extends React.Component {
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
    render() {
        let backdrop;
        if (this.state.siderDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler} />;
        }
        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleHandler} about={true} />
                <SideDrawer about={true} show={this.state.siderDrawerOpen} />
                {backdrop}
                <div className="ngo-main-div">
                    <div className="filter-area">
                    <h2 className="filter-heading">Filter Requests:</h2>
                        <ul className="filter-options">
                            <li><a href="/">All</a></li>
                            <li><a href="/">Human Rights Organization </a></li>
                            <li><a href="/">Helping Hands</a></li>
                            <li><a href="/">Justice For You</a></li>
                            <li><a href="/">Little Care</a></li>
                            <li><a href="/">Speak For Change</a></li>
                            <li><a href="/">We Work Together</a></li>
                            
                        </ul>
                    </div>
                    <div class="request-area">
                        <h2 className="request-area-heading">NGO'S REQUESTS</h2>
                        
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="text-right"><a href="/" class="btn btn-primary " style={{fontWeight:"bold"}}>Donate NOW</a></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="text-right"><a href="#" class="btn btn-primary " style={{fontWeight:"bold"}}>Donate NOW</a></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="text-right"><a href="/" class="btn btn-primary " style={{fontWeight:"bold"}}>Donate NOW</a></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="text-right"><a href="#" class="btn btn-primary " style={{fontWeight:"bold"}}>Donate NOW</a></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="text-right"><a href="/" class="btn btn-primary " style={{fontWeight:"bold"}}>Donate NOW</a></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="text-right"><a href="#" class="btn btn-primary " style={{fontWeight:"bold"}}>Donate NOW</a></div>
                        </div>


                        
                    </div>
                </div>
                <Footer/>
            </div>
        );
        }
}
export default NGORequests;