import React, { Component } from 'react';
import _ from 'lodash';

import './Credit.css';

class Credit extends Component {
  constructor() {
    super();

    this.state = {
      isHover: false
    };
  }

  render() {
    const { name, credits } = this.props;
    const { isHover } = this.state;

    return (
      <div className="credit"
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
        style={{ backgroundColor: isHover ? '#F5F5F5' : 'transparent' }}
      >
        <img src="http://placehold.it/150x200" alt="foto de perfil"/>
        <div className="info">
          <div>
            {name}
          </div>
          <div className="credits">
            <span>{_.upperCase(credits)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Credit;
