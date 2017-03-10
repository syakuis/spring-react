import React, { Component, PropTypes } from 'react';

const propTypes = {
  boardList: PropTypes.array,
};

const defaultProps = {
  boardList: [],
};

class BasicList extends Component {
  constructor(props) {
    super(props);
  }

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
          {
            this.props.boardList.map(board => (
              <tr>
                <td className="text-center">1</td>
                <td>{board.subject}</td>
                <td>{board.userName}</td>
                <td>1</td>
                <td>{board.regDate}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

BasicList.propTypes = propTypes;

BasicList.defaultProps = defaultProps;

export default BasicList;
