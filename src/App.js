import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MainPage from './myComponents/MainPage/MainPage';
import AboutUs from './myComponents/AboutUs/AboutUs';
import LoginForm from './myComponents/Login/LoginForm';
import Help from './myComponents/Help/Help';
import Signup from './myComponents/Signup/Signup';
import DonationForm from './myComponents/DonationForm/DonationForm';

const App=()=>{
    return(
        <BrowserRouter>
        <div>
           <Route path="/" exact component={MainPage}/>
           <Route path="/signup" exact component={Signup}/>
           <Route path="/aboutUs" component={AboutUs}/>
           <Route path="/login" component={LoginForm}/>
           <Route path="/help" component={Help}/>
           <Route path="/donationForm" component={DonationForm}/>
       </div>
       </BrowserRouter>
    );
};
export default App;