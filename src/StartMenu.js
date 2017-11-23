import React, { Component } from 'react';

const discs = ['disc', 'disc', 'disc'];
const bars = ['bar', 'bar', 'bar'];
const change = [
  ['change1 bar', 'change2 bar', 'change3 bar'],
  [
    'discchange1 discImage1 disc',
    'discchange2 discImage2 disc',
    'discchange3 discImage3 disc'
  ]
];
class StartMenu extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      barChange: [...bars],
      discChange: [...discs]
    };
  }

  _handleClick = () => {
    if (this.state.toggle)
      this.setState({
        barChange: change[0],
        discChange: change[1],
        toggle: false
      });
    else
      this.setState({
        barChange: [...bars],
        discChange: [...discs],
        toggle: true
      });
  };

  render() {
    return (
      <div>
        <div className="burger-container" onClick={() => this._handleClick()}>
          <div className={this.state.barChange[0]} />
          <div className={this.state.barChange[1]} />
          <div className={this.state.barChange[2]} />
        </div>
        <div className="disc-container">
          <div
            className={this.state.discChange[0]}
            onClick={this.props.handleCheapest}
          />
          <div
            className={this.state.discChange[1]}
            onClick={this.props.handleNearest}
          />
          <div className={this.state.discChange[2]} />
        </div>
      </div>
    );
  }
}

export default StartMenu;
