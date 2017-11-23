import React, { Component } from 'react';

class ListItem extends Component {

  render() {

    return (
      <div className="item-details">
        <div className="item-price">${Number(this.props.item.price).toLocaleString('en')}</div>
        <div className="item-name">{this.props.item.name}</div>
        <div className="item-restaurant">Restaurant: {this.props.item.restaurant.name}</div>
        <div className="item-distance">{this.props.item.distance}m</div>
      </div>
    );
  }

}

export default ListItem;
