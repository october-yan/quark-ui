import React from 'react';

export default class Colgroup extends React.Component {
  renderColgroup() {
    const { fixedColumn, columns } = this.props;
    const cols = [];
    const colsRight = [];
    const colsLeft = [];

    columns.map((item, i) => {
      let style = {};
      if (item.width) {
        style = {
          width: item.width || 'auto',
          minWidth: '100px',
        };
      }
      if (item.fixed === 'right') {
        colsRight.push(<col style={style} key={i} />);
      } else if (item.fixed === 'left') {
        colsLeft.push(<col style={style} key={i} />);
      }
      cols.push(<col style={style} key={i} />);
    });

    if (fixedColumn && fixedColumn === 'right') {
      return colsRight;
    } else if (fixedColumn && fixedColumn === 'left') {
      return colsLeft;
    }
    return cols;
  }

  render() {
    return <colgroup>{this.renderColgroup()}</colgroup>;
  }
}
