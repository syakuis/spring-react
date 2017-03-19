import React, { Component, PropTypes } from 'react';

const propTypes = {
  board: PropTypes.shape({
    boardIdx: PropTypes.string.isRequired,
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

class BasicView extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {this.props.board.subject}
          <hr />
          <div className="margin-bottom20">
            <i className="fa fa-user" /> <small>{this.props.board.userName}</small>
            <i className="fa fa-clock-o" /> <small>{this.props.board.regDate}</small>
            <div className="pull-right">
              <strong><i className="fa fa-eye" /> 조회수</strong> <small>1</small>
            </div>
          </div>
          <div>{this.props.board.content}</div>
          <hr />
        </div>
      </div>
    );
  }
}

BasicView.propTypes = propTypes;
BasicView.defaultProps = defaultProps;

export default BasicView;
