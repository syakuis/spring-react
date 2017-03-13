import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import BasicPost from '_components/BasicPost';
import BoardService from '_services/BoardService';

class BoardPostContainer extends Component {
  constructor(props) {
    super(props);

    this.saveBoard = this.saveBoard.bind(this);
    this.service = new BoardService();
  }

  saveBoard(data) {
    this.service.saveBoard(data).then(() => {
      browserHistory.push('/');
    });
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
