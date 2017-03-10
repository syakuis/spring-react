import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import BoardService from '_services/BoardService';

import BasicList from '_components/BasicList';

class BoardListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.http = new BoardService();

    this.state = {
      board: {},
    };
  }

  componentWillMount() {
    this.http.getBoardView().then((res) => {
      this.setState({ boardList: res.data });
    });
  }

  render() {
    return (
      <div>
        <BasicList boardList={this.state.boardList} />
        <Link to="/post">
          게시판쓰기.
        </Link>
      </div>
    );
  }
}

export default BoardListContainer;
