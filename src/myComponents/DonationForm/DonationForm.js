import React, { Component } from 'react';
import './DonationForm.css';

class DonationForm extends Component{

    state={
        category:"Clothes",
        itemDescription:"",
    };

    DonationFormInputChange=(event, fieldName)=>{
        this.setState({[fieldName]: event.target.value });
    };

    render(){
        return(
            <div className="my-login-background">
                <form className="my-donation-form" noValidate>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" 
                                value={this.state.category}  
                                onChange={event=> this.DonationFormInputChange(event, "category")}  
                                id="category" 
                                className="form-control">
                            <option>Clothes</option>
                            <option>Books</option>
                            <option>Toys</option>
                            <option>Medicines</option>
                        </select>
                    </div> 

                    <div className="form-group">
                        <label htmlFor="item-description">Description</label>
                        <textarea name="item-description" 
                                // rows="10"
                                // cols="50"
                                value={this.state.itemDescription}  
                                onChange={event=> this.DonationFormInputChange(event, "itemDescription")}  
                                id="item-description" 
                                className="form-control">
                        </textarea>
                    </div>    
                    <div className="form-group">
                        
                    </div>

                    {/* <div className="form-group rating">
                        <input type="radio" name="star" id="star1" /><label htmlFor="star1"></label>
                        <input type="radio" name="star" id="star2" /><label htmlFor="star2"></label>
                        <input type="radio" name="star" id="star3" /><label htmlFor="star3"></label>
                        <input type="radio" name="star" id="star4" /><label htmlFor="star4"></label>
                        <input type="radio" name="star" id="star5" /><label htmlFor="star5"></label>
                    </div>       */}

                    {/* <button type="submit" className="login-btn my-btn">Login</button> */}
                </form>
            </div>
        );
    }
}
export default DonationForm;