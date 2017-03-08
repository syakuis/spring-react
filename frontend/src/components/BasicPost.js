import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  boardIdx: PropTypes.string,
};

class BasicPost extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="subject" className="col-xs-2 control-label">제목</label>
          <div className="col-xs-10">
            <input type="text" className="form-control" name="subject" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="col-xs-2 control-label">내용</label>
          <div className="col-xs-10">
            <textarea className="form-control" placeholder="내용을 입력하세요." />
          </div>
        </div>

        <div className="text-center">
          <Link className="btn btn-success btn-sm">
            <i className="fa fa-check" /> 저장
          </Link>
          <Link class="btn btn-default btn-sm" to="/">
            <i className="fa fa-bars" /> 목록
          </Link>
        </div>
      </form>
    );
  }
}

BasicPost.propTypes = propTypes;

BasicPost.defaultProps = {
  boardIdx: null,
};

export default BasicPost;
