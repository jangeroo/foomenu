import React, { Component } from 'react';
import ListItem from './listItem.js'
import FoomenuAPI from './backend-mock.js';

var a = FoomenuAPI;

class Cheapest extends Component {
    constructor() {
        super();
        this.state = { item: [] }
    }
    componentWillMount() {
        this.props.backBtnUpdate({backBtn: true});
        a.getCheapestBurger()
            .then(dishes => {
                let arrItemObjs = []
                dishes.forEach(item => {
                    const itemObj = {
                        name: item.name,
                        price: item.price,
                        restaurant: item.restaurant
                    }
                    arrItemObjs.push(itemObj);
                    this.setState({ item: arrItemObjs })
                })
            });
    }

    render() {
        return (
            <div className="App-cheapest-content">
                <ol>
                    {this.state.item.map(item => {
                        return (<li key={item.name}>
                                <ListItem item={item} />
                                </li>)
                    })}
                </ol>
            </div>
        );
    }

}

export default Cheapest;
