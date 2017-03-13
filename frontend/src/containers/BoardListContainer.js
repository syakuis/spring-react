import React, { Component } from 'react';
import { Link } from 'react-router';

import BoardService from '_services/BoardService';

import BasicList from '_components/BasicList';
import PagiNation from '_components/PagiNation';

class BoardListContainer extends Component {
  constructor(props) {
    super(props);

    this.handlerPageChange = this.handlerPageChange.bind(this);

    this.http = new BoardService();

    this.state = {
      page: 1,
      boardList: [],
      totalRow: 0,
    };
  }

  componentWillMount() {
    this.handlerPageChange(PagiNation.getPage(this.state.page));
  }

  handlerPageChange(page, limit) {
    this.http.getBoardList(page, limit).then((res) => {
      this.setState({ page, boardList: res.data.content, totalRow: res.data.totalElements });
    });
  }

  render() {
    return (
      <div>
        <BasicList boardList={this.state.boardList} />
        <PagiNation
          className="text-center"
          page={this.state.page}
          totalRow={this.state.totalRow}
          onPageChange={this.handlerPageChange}
        />
        <Link to="/post">
          게시판쓰기.
        </Link>
      </div>
    );
  }
}

export default BoardListContainer;
