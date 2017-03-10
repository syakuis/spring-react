import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import BoardService from '_services/BoardService';

import BasicList from '_components/BasicList';
import PagiNation from '_components/PagiNation';

class BoardListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.http = new BoardService();

    this.state = {
      boardList: [],
    };
  }

  componentWillMount() {
    this.http.getBoardList().then((res) => {
      this.setState({ boardList: res.data.content });
    });
  }

  render() {
    return (
      <div>
        <BasicList boardList={this.state.boardList} />
        <PagiNation totalRow={200} />
        <Link to="/post">
          게시판쓰기.
        </Link>
      </div>
    );
  }
}

export default BoardListContainer;
