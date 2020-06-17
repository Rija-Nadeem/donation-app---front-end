import React from 'react';

class Card extends React.Component{
   
    render(){
        let badgeClass="badge";
        if(this.props.status==="Rejected"){
            badgeClass="badge badge-danger";
        }
        if(this.props.status==="Approved"){
            badgeClass="badge badge-success";
        }
        if(this.props.status==="Pending"){
            badgeClass="badge badge-warning";
        }
        return(
        <div class="card">
            <img src={this.props.itemImg} alt=".." className="card-image"/>
            <div class="card-body">
        <h5 class="card-title">{this.props.title} <span class={badgeClass}>{this.props.status}</span> </h5>
                <p class="card-text">{this.props.description}</p>
                <a href="#" class="btn btn-primary view-detail">View Details</a>
            </div>
        </div>
        );
    }
}

export default Card;