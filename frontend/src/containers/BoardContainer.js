import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

const BoardContainer = props => (
  <div>
    {props.children}
  </div>
);

BoardContainer.propTypes = propTypes;
BoardContainer.defaultProps = defaultProps;

export default BoardContainer;
