import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import BoardService from '_services/BoardService';

import BasicView from '_components/BasicView';

const propTypes = {
  location: PropTypes.object.isRequired,
  params: PropTypes.shape({
    boardIdx: PropTypes.string.isRequired,
  }).isRequired,
};

class BoardViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.boardService = new BoardService();

    this.deleteBaord = this.deleteBoard.bind(this);

    this.state = {
      board: {},
    };
  }

  componentWillMount() {
    this.boardService.getBoardObject(this.props.params.boardIdx).then((res) => {
      this.setState({ board: res.data });
    });
  }

  deleteBoard(e) {
    console.log(e);
    this.boardService.deleteBaord(this.state.board.boardIdx).then(() => {
      browserHistory.push('/');
    });
  }

  render() {
    return (
      <div>
        <BasicView board={this.state.board} />
        <Link className="btn btn-default btn-sm" to={{ pathname: '/', query: this.props.location.query }}>
          <i className="fa fa-bars" /> 목록
        </Link>&nbsp;
        <Link className="btn btn-default btn-sm" to={`/post/${this.state.board.boardIdx}`}>
          <i className="fa fa-pencil" /> 수정
        </Link>&nbsp;
        <button className="btn btn-danger btn-sm" onClick={this.deleteBoard}>
          <i className="fa fa-times" /> 삭제
        </button>
      </div>
    );
  }
}

BoardViewContainer.propTypes = propTypes;

export default BoardViewContainer;
