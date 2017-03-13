import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import BoardService from '_services/BoardService';

import BasicList from '_components/BasicList';
import PagiNation from '_components/PagiNation';

class BoardListContainer extends Component {
  constructor(props) {
    super(props);

    this.boardView = this.boardView.bind(this);
    this.pageChange = this.pageChange.bind(this);

    this.http = new BoardService();

    this.state = {
      page: 1,
      boardList: [],
      totalRow: 0,
    };
  }

  componentWillMount() {
    this.pageChange(PagiNation.getPage(this.state.page));
  }

  boardView(boardIdx) {
    console.log(boardIdx, this.props);
    browserHistory.push(`/${boardIdx}`);
  }

  pageChange(page, limit) {
    this.http.getBoardList(page, limit).then((res) => {
      this.setState({ page, boardList: res.data.content, totalRow: res.data.totalElements });
    });

    PagiNation.updateBrowserHistory(page, browserHistory);
  }

  render() {
    return (
      <div>
        <BasicList
          boardList={this.state.boardList}
          onBoardView={this.boardView}
        />
        <PagiNation
          className="text-center"
          page={this.state.page}
          totalRow={this.state.totalRow}
          onPageChange={this.pageChange}
        />
        <Link to="/post">
          게시판쓰기.
        </Link>
      </div>
    );
  }
}

export default BoardListContainer;
