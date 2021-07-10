import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    // constructor 내부에서는 state 직접 수정가능
    super(props);
    this.state = {
      id: this.props.data.id, //  app.js 파일에서 클릭이벤트 실행시 선택된 this.state.menu 객체중에서 id 값
      title: this.props.data.title,
      desc: this.props.data.desc,
    };

    this.inputFormHandler = this.inputFormHandler.bind(this); // refactoring (중복제거, 코드간결하게 )
  }

  inputFormHandler(e) {
    // refactoring (중복제거, 코드간결하게 ) 위해서 함수 작성
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.props.data);
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_~~~" // " "사이 주소로 사용자 입력정보를 전송하겠다
          method="post" // post 방식으로 전송 (내용 보호)
          onSubmit={function (e) {
            e.preventDefault(); // form태그의 submit버튼누를시 실행하는 이벤트
            //onSubmit이벤트는  form태그의 고유기능 ㄹㅣ엑트기능
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            ); // app 컴포넌트의 CreateContent에 onSubmit이벤트 인자로 사용자에게 입력받은 내용 넘김]
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          {/* //placeholder 는 text박스안에 빈내용일때 나오는 초기 값 */}
          <p>
            <textarea
              name="desc"
              placeholder="text"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
            {/* //전송버튼 */}
          </p>
        </form>
      </article>
    );
  }
}

export default Update;
