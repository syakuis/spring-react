import React, { Component, PropTypes } from 'react';

class BasicList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <colgroup>
          <col width="50" />
          <col />
          <col width="200" />
          <col width="200" />
          <col width="100" />
          <col width="100" />
          <col width="50" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">조회수</th>
            <th scope="col">등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>good</td>
            <td>good</td>
            <td>good</td>
            <td>good</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

BasicList.propTypes = {

};

export default BasicList;
