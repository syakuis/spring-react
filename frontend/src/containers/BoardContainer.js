import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

class BoardContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

BoardContainer.propTypes = propTypes;
BoardContainer.defaultProps = defaultProps;

export default BoardContainer;
