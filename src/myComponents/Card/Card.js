import React from 'react';

class Card extends React.Component{

    render(){
        const obj={
            'Rejected':'badge badge-danger',
            'Approved': 'badge badge-success',
            'Pending': 'badge badge-warning'
        };
        return(
        <div class="card">
            <img src={this.props.itemImg} alt=".." className="card-image"/>
            <div class="card-body">
        <h5 class="card-title">{this.props.title} <span class={obj[this.props.status]}>{this.props.status}</span> </h5>
                <p class="card-text">{this.props.description}</p>
                <a href="/" class="btn btn-primary view-detail">View Details</a>
            </div>
        </div>
        );
    }
}

export default Card;