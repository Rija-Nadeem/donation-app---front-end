import React, { Component } from 'react';
import './DonationForm.css';
import StarRatingComponent from 'react-star-rating-component';
import Gift from '../../images/giftbox.png';


class DonationForm extends Component{
    constructor() {
        super();
     
        this.state = {
          rating: 1,
          category:"Clothes",
          itemDescription:"",
          
         
        };
      }

      

      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      };


    DonationFormInputChange=(event, fieldName)=>{
        this.setState({[fieldName]: event.target.value });
    };
    // setRating=(e)=>{
        
    //     this.setState({setrating: e.target.value});
    //     console.log(this.state);
    // };

    render(){
        const { rating } = this.state;
        return(
            <div className="my-donation-page">
                <div className="container">
                    <h1 className="blue-heading">Make A Donation</h1>

                </div>
                     {/* <div className="gift-img">
                        <img src={Gift} alt="no img"/>
                    </div> 
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
                        <label>Please rate condition of item</label>
                        <div>
                            <StarRatingComponent 
                            className="star-rating"
                            name="rate1" 
                            starCount={5}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                            />
                        </div>
                    </div>
                </form> */}
            </div>
                  
                
            
        );
    }
}
export default DonationForm;