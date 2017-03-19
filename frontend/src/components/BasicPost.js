import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  board: PropTypes.object,
  saveBoard: PropTypes.func.isRequired,
};

const defaultProps = {
  board: {
    boardIdx: null,
    subject: null,
    content: null,
    userName: null,
  },
};

class BasicPost extends Component {
  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
    this.handlerSwitch = this.handlerSwitch.bind(this);

    this.state = props.board;
  }

  componentWillReceiveProps(props) {
    this.setState(props.board);
  }

  save(e) {
    e.preventDefault();
    this.props.saveBoard(this.state);
  }

  handlerSwitch(e) {
    const id = e.target.id;
    const value = e.target.value;

    this.setState({ [id]: value });
  }
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="userName" className="col-xs-2 control-label">이름</label>
          <div className="col-xs-10">
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="이름을 입력하세요."
              onChange={this.handlerSwitch}
              value={this.state.userName}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="col-xs-2 control-label">제목</label>
          <div className="col-xs-10">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="제목을 입력하세요."
              onChange={this.handlerSwitch}
              value={this.state.subject}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="col-xs-2 control-label">내용</label>
          <div className="col-xs-10">
            <textarea
              className="form-control"
              id="content"
              placeholder="내용을 입력하세요."
              onChange={this.handlerSwitch}
              value={this.state.content}
            />
          </div>
        </div>

        <div className="text-center">
          <button
            className="btn btn-success btn-sm"
            onClick={this.save}
          >
            <i className="fa fa-check" /> 저장
          </button>&nbsp;
          <Link className="btn btn-default btn-sm" to="/">
            <i className="fa fa-bars" /> 목록
          </Link>
        </div>
      </form>
    );
  }
}

BasicPost.propTypes = propTypes;

BasicPost.defaultProps = defaultProps;

export default BasicPost;
