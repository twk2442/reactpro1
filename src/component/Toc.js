import React, { Component } from "react";

class Toc extends Component {
  render() {
    var Data = this.props.data; // 외부 props (app.js 파일에서) data 받아와서 변수 Data로 선언
    var i = 0;
    var list = []; //list 선언
    while (i < Data.length) {
      list.push(<li>{Data[i].title}</li>);
      i = i + 1;
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default Toc; //추출가능 명시
