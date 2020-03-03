import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import AboutUs from './components/AboutUs/AboutUs';
import LoginForm from './components/Login/LoginForm';
import Help from './components/Help/Help';
import Signup from './components/Signup/Signup';
import DonationForm from './components/DonationForm/DonationForm';

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