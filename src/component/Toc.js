import React, { Component } from "react";

class Toc extends Component {
  shouldComponentUpdate(newProps, newState) {
    // 원본menu를 바꾸지 않았을때(concat 사용시) 사용하면 좋은함수
    //  프로그램이 커질때 데이터가 변하지 않으면 랜더할 필요가 없는 컴포넌트들이 존재 ==> 랜더할 필요있는지없는지 확인
    // 해주는 함수 shouldComponentUpdate()  인자로 newProps , newState를 받음
    console.log(
      "==> TOC render call shouldComponentUpdate",
      newProps.data,
      this.props.data
    );
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  render() {
    console.log("TOV render call");
    var data = this.props.data; // 외부 props (app.js 파일에서) data 받아와서 변수 Data로 선언
    var i = 0;
    var list = []; //list 선언
    while (i < data.length) {
      list.push(
        <li>
          <a
            href="/"
            data-id={data[i].id} // data-id 에다가 현재 data id  인자 저장
            onClick={function (e) {
              // e.target.dataset.id
              e.preventDefault();
              this.props.onChange(e.target.dataset.id); // 함수 e인자의 타겟 데이타셋 id는 위에저장한 data-id값이  타겟으로 저장되어있다. 그것을 props를이용해 onChange 이벤트 인자로 넘기면
              // app.js에서도 사용가능   ( 결국 리엑트는 props 이용해서 파일간 필요한 데이터를 자유롭게 넘나들어 사용가능하다.)
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
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
