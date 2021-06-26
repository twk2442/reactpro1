import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault(); // 기본실행막기
              this.props.onChange(); // 프롭스로 onChange이벤트 받아오기
            }.bind(this)} // 바인드 함수로 묶어서 this 사용할 수 있게끔 해주기
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
