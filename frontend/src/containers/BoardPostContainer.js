import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';

import BasicPost from '_components/BasicPost';
import BoardService from '_services/BoardService';

const propTypes = {
  params: PropTypes.shape({
    boardIdx: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  params: {
    boardIdx: null,
  },
};

class BoardPostContainer extends Component {
  constructor(props) {
    super(props);

    this.service = new BoardService();

    this.saveBoard = this.saveBoard.bind(this);

    this.state = {
      board: {},
    };
  }

  componentWillMount() {
    if (!this.props.params.boardIdx) return;
    this.service.getBoardObject(this.props.params.boardIdx).then((res) => {
      this.setState({ board: res.data });
    });
  }


  saveBoard(data) {
    this.service.saveBoard(data).then(() => {
      browserHistory.push('/');
    });
  }

  render() {
    return (
      <div>
        <BasicPost board={this.state.board} saveBoard={this.saveBoard} />
      </div>
    );
  }
}

BoardPostContainer.propTypes = propTypes;
BoardPostContainer.defaultProps = defaultProps;

export default BoardPostContainer;
