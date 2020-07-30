import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import history from './assets/history';
import MainPage from './myComponents/MainPage/MainPage';
import AboutUs from './myComponents/AboutUs/AboutUs';
import LoginForm from './myComponents/Login/LoginForm';
import Help from './myComponents/Help/Help';
import Signup from './myComponents/Signup/Signup';
import DonationForm from './myComponents/DonationForm/DonationForm';
// import Places from './myComponents/GoogleMap/Places';
import Profile from './myComponents/Profile/Profile';
import NGORequests from './myComponents/NGORequests/NGORequests';
import GoogleMap from './myComponents/GoogleMap/GoogleMap';

const App=()=>{
    return(
        <Router history={history}>
        <Switch>
           <Route path="/" exact component={MainPage}/>
           <Route path="/signup" exact component={Signup}/>
           <Route path="/aboutUs" component={AboutUs}/>
           <Route path="/login" component={LoginForm}/>
           <Route path="/help" component={Help}/>
           <Route path="/donationForm" component={DonationForm}/>
           <Route path="/googleMap" component={GoogleMap}/>
           <Route path="/profile" component={Profile}/>
           <Route path="/ngoRequests" component={NGORequests}/>
       </Switch>
       </Router>
    );
};
export default App;