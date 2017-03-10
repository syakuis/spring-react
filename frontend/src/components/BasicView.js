import React, { Component, PropTypes } from 'react';

class BasicView extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
        제목
        <hr />
          <div className="margin-bottom20">
            <i className="fa fa-user" /> <small>작성자</small>
            <i className="fa fa-clock-o" /> <small>등록일</small>
            <div className="pull-right">
              <strong><i className="fa fa-eye" /> 조회수</strong> <small>1</small>
            </div>
          </div>
          <div>내용</div>
          <hr />
        </div>
      </div>
    );
  }
}

BasicView.propTypes = {

};

export default BasicView;
