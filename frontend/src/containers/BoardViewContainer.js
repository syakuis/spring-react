import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import BoardService from '_services/BoardService';

import BasicView from '_components/BasicView';

const propTypes = {
  params: PropTypes.shape({
    boardIdx: PropTypes.string.isRequired,
  }).isRequired,
};

class BoardViewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.http = new BoardService();

    this.state = {
      board: {},
    };
  }

  componentWillMount() {
    this.http.getBoardObject(this.props.params.boardIdx).then((res) => {
      this.setState({ board: res.data });
    });
  }

  render() {
    return (
      <div>
        <BasicView board={this.state.board} />
        <Link to="/post">
          게시판쓰기.
        </Link>
      </div>
    );
  }
}

BoardViewContainer.propTypes = propTypes;

export default BoardViewContainer;
