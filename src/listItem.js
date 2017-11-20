import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';


class ListItem extends Component {

    _ratingChanged = (newRating) => {
        console.log(newRating)
      }

    render() {
        return (
            <div className="item-details">
                <div className="item-price">${Number(this.props.item.price).toLocaleString('en')}</div>
                <Link to={`/browse/${this.props.item.name}`}><div className="item-name">{this.props.item.name}</div></Link>
                <div className="item-rate"><ReactStars count={5} onChange={this._ratingChanged} size={18} color2={'#ffd700'}/></div>
                <div className="item-restaurant">Restaurant: {this.props.item.restaurant.name}</div>
                <div className="item-overall-rating"><ReactStars count={5} value={4.5} edit={false} size={10} color2={'#ffd700'}/></div>
                <hr/>
                

            </div>
        );
    }

}

export default ListItem;
