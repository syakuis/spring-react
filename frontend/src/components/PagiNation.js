import React, { Component, PropTypes } from 'react';

const propTypes = {
  page: PropTypes.number,
  totalRow: PropTypes.number,
  totalPage: PropTypes.number,
  pageCount: PropTypes.number,
  rowCount: PropTypes.number,
};

const defaultProps = {
  page: 14,
  totalRow: 0,
  totalPage: 0,
  pageCount: 10,
  rowCount: 10,
};

class PagiNation extends Component {

  constructor(props) {
    super(props);

    this.totalPage = props.totalPage;
    if (props.totalPage === 0) {
      this.totalPage = Math.floor((props.totalRow - 1) / props.rowCount) + 1;
    }
    this.startPage = Math.floor(props.page / props.pageCount) * props.pageCount;
    this.endPage = this.startPage + props.pageCount;
    this.pageItems = this.endPage - this.startPage;
    this.nowPageGroup = Math.floor(this.startPage / props.pageCount) + 1;
    this.nextPage = this.endPage + 1;
    this.prevPage = this.startPage - 1;

    console.log(this.nowPageGroup, this.startPage, this.endPage, this.totalPage, props.totalRow);
  }

  render() {
    return (
      <div>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {
              Array(this.pageItems)
                .fill(0).map((_, i) => (
                  <li>
                    <a href="">{this.startPage + i}</a>
                  </li>
              ))
            }
          </ul>
        </nav>
      </div>
    );
  }
}

PagiNation.propTypes = propTypes;

PagiNation.defaultProps = defaultProps;

export default PagiNation;
