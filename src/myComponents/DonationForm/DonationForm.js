import React, { Component } from 'react';
import './DonationForm.css';
import StarRatingComponent from 'react-star-rating-controlled-component';
import DummyImage from './DummyImage';
import book from '../../images/book.png';
import heartImg from '../../images/heart-img.PNG';
import giftbox from '../../images/giftbox.png';

const initialDonationState={
    rating: 0,
    category:"Clothes",
    itemDescription:"",
    condition: "Used",
    ratingError:"",
    itemDescriptionError:"",
    files: [],
}

class DonationForm extends Component{
    constructor() {
        super();
     
        this.state = initialDonationState;
      }

    onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    };

    DonationFormInputChange=(event, fieldName)=>{
        this.setState({[fieldName]: event.target.value });
       
    };

    ImagefileSelectedHandler = (e) => {
        this.setState({ files: [...this.state.files, ...e.target.files] });
       
        console.log(e.target.files);
      }
    // ImageInputChange=(e)=>{
    //     this.setState({ itemPic: [...this.state.itemPic, ...e.target.files] })
      
    // };
        // let files=event.target.files;
        // let reader=new FileReader();
        // reader.readAsDataURL(files[0]);
        // reader.onload=(e)=>{
        //     console.log(e.target.result);
        // for uploading image to api
        //     const url="http://127.0.0.1:8000/api/services";
        //     const formData={file:e.target.result}
        //     return post(url, formData)
        //         .then(response=>console.log(response))
        //}
       
    

    Donationvalidation=(e)=>{
        let itemDescriptionError="";
        let ratingError="";

        if(!this.state.itemDescription){
            itemDescriptionError='*required';
            }
        
        if(this.state.rating < 1){
           ratingError='*please rate condition';
        }

        if(ratingError||itemDescriptionError){
            this.setState({ratingError,itemDescriptionError});
            return false;
        }
        
        return true;
    };

    DonationFormSubmitHandler=(e)=>{
        e.preventDefault();
        
        const isValid=this.Donationvalidation();
        if (isValid){
            const DonationData={
                rating: this.state.rating,
                category:this.state.category,
                itemDescription:this.state.itemDescription,
                condition: this.state.condition,
            }
            //clear form
            this.setState(initialDonationState);
            console.log(DonationData);
            
        }
        console.log(this.state);
    };
   
    render(){
        const { rating } = this.state;
        return(
            <div className="my-donation-page">
                <div className="container">

                <h1 className="blue-heading donation-heading">Make A Donation</h1>

                    {/* pictures */}
                    <div className="account-pic-container">
                        <div className="row">
                            <div className="col-4 main-pic-container">
                                <DummyImage picture={giftbox} />
                            </div>
                            <div className="col-4 main-pic-container">
                                <DummyImage picture={heartImg} />
                            </div>
                            <div className="col-4 main-pic-container">
                                <DummyImage picture={book}/>
                            </div>
                        </div>
                    </div>

                {/* donation form */}
                <form className="my-donation-form" onSubmit={this.DonationFormSubmitHandler} noValidate>
                    <div className="form-group">
                        <label htmlFor="category" className="my-donation-label">Category</label>
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
                        <label htmlFor="item-description" className="my-donation-label">Description</label>
                        <textarea name="item-description" 
                                // rows="10"
                                // cols="50"
                                value={this.state.itemDescription}  
                                onChange={event=> this.DonationFormInputChange(event, "itemDescription")}  
                                id="item-description" 
                                placeholder="Add Item Description"
                                className="form-control">
                        </textarea>
                        <div style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.itemDescriptionError}</div>
                    </div> 

                    <div className="form-group">
                        <label>Upload Item Image(s)</label>
                        <div className="item-pic-container ">
                        <input type="file" multiple onChange={this.ImagefileSelectedHandler} />
                           
                        {/* <div className="item-pic">
                            <img src={book} alt="no imag" />
                        </div> */}
                             

                        </div>


                    </div>

                    <div className="row">
                            <div className="col-sm-6">

                                <div className="form-group my-condition-radio">
                                    <label>Select One:</label><br/>
                                        <label className="radio">
                                            <input type="radio" 
                                                    name="condition" 
                                                    value="Used"
                                                    checked={this.state.condition === "Used"}
                                                    onChange={event=> this.DonationFormInputChange(event, "condition")}  /> Used
                                                    <span></span>
                                        </label>
                                        <label className="radio">
                                            <input type="radio" 
                                                    name="condition" 
                                                    value="Unused"
                                                    checked={this.state.condition === "Unused"}
                                                    onChange={event=> this.DonationFormInputChange(event, "condition")}  /> Unused
                                                    <span></span>
                                        </label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label style={{marginBottom:"0px"}}>Please rate condition of item
                                    <span style={{fontSize:"12.8px", color:"#DC3545", marginLeft:"20px"}}>{this.state.ratingError}</span>
                                        </label><br/>
                                    
                                        <StarRatingComponent 
                                        className="star-rating"
                                        name="rate" 
                                        starCount={5}
                                        value={rating}
                                        emptyStarColor={"#6c6c6c"}
                                        onStarClick={this.onStarClick.bind(this)}
                                        />
                                   
                                </div>
                            </div>
                        </div>
                        <button type="submit" style={{outline:"none"}} className="my-btn signup-btn">NEXT</button>
                </form>
            </div>    
        </div>
    );
}
}
export default DonationForm;