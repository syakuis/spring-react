import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import BoardService from '_services/BoardService';

import BasicList from '_components/BasicList';
import PagiNation from '_components/PagiNation';

const propTypes = {
  location: PropTypes.object.isRequired,
};

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
      pageCount: 10,
      rowCount: 10,
    };
  }

  componentWillMount() {
    this.pageChange(PagiNation.getPage(this.state.page));
  }

  boardView(boardIdx) {
    browserHistory.push({ pathname: `/${boardIdx}`, query: this.props.location.query });
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
          page={this.state.page}
          totalRow={this.state.totalRow}
          pageCount={this.state.pageCount}
          rowCount={this.state.rowCount}
        />
        <PagiNation
          className="text-center"
          page={this.state.page}
          totalRow={this.state.totalRow}
          pageCount={this.state.pageCount}
          rowCount={this.state.rowCount}
          onPageChange={this.pageChange}
        />
        <Link className="btn btn-default btn-sm" to="/post">
          <i className="fa fa-bars" /> 등록
        </Link>
      </div>
    );
  }
}

BoardListContainer.propTypes = propTypes;

export default BoardListContainer;
