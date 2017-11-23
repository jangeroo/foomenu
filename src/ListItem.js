import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    if (this.props.itemDisplay === 'list') {
      return (
        <div className="item-details">
          <div className="item-price">
            ${Number(this.props.item.price).toLocaleString('en')}
          </div>
          <div className="item-name">{this.props.item.name}</div>
          <div className="item-restaurant">
            Restaurant: {this.props.item.restaurant.name}
          </div>
          <div className="item-distance">{this.props.item.distance}m</div>
        </div>
      );
    } else if (this.props.itemDisplay === 'info-window') {
      return (
        <div className="item-details">
          <div>
            <img
              src="http://www.myiconfinder.com/uploads/iconsets/256-256-50d2bb24a01a3c32510470c6cf675782-burger.png"
              width="100px"
              height="100px"
            />
          </div>
          <div>
            <h2>${Number(this.props.item.price).toLocaleString('en')}</h2>
          </div>
          <div>
            <h1>{this.props.item.name}</h1>
          </div>
          <div>Restaurant: {this.props.item.restaurant.name}</div>
          <div>RATE STARS AVG RATING (4.7)</div>
        </div>
      );
    } else return <div />;
  }
}

export default ListItem;
