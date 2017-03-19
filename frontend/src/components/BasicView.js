import React, { PropTypes } from 'react';

const propTypes = {
  board: PropTypes.shape({
    subject: PropTypes.string,
    content: PropTypes.string,
    userName: PropTypes.string,
    regDate: PropTypes.number,
  }),
};

const defaultProps = {
  board: {
    subject: null,
    content: null,
    userName: null,
    regDate: null,
  },
};

const BasicView = props => (
  <div className="panel panel-default">
    <div className="panel-body">
      {props.board.subject}
      <hr />
      <div className="margin-bottom20">
        <i className="fa fa-user" /> <small>{props.board.userName}</small>
        <i className="fa fa-clock-o" /> <small>{props.board.regDate}</small>
        <div className="pull-right">
          <strong><i className="fa fa-eye" /> 조회수</strong> <small>1</small>
        </div>
      </div>
      <div>{props.board.content}</div>
      <hr />
    </div>
  </div>
);

BasicView.propTypes = propTypes;
BasicView.defaultProps = defaultProps;

export default BasicView;
