import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class BoardListContainer extends React.Component {
  render() {
    return (
      <div>
        게시판목록.
        <Link to="/post">
          게시판쓰기.
        </Link>
      </div>
    );
  }
}

export default BoardListContainer;
