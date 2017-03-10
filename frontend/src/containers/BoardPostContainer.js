import React, { PropTypes } from 'react';

import BasicPost from '_components/BasicPost';
import BoardService from '_services/BoardService';

class BoardPostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.saveBoard = this.saveBoard.bind(this);
    this.service = new BoardService();
  }

  saveBoard(data) {
    this.service.saveBoard(data);
  }

  render() {
    return (
      <div>
        <BasicPost saveBoard={this.saveBoard} />
      </div>
    );
  }
}

export default BoardPostContainer;
