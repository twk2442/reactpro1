import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_~~~" // " "사이 주소로 사용자 입력정보를 전송하겠다
          method="post" // post 방식으로 전송 (내용 보호)
          onSubmit={function (e) {
            e.preventDefault(); // form태그의 submit버튼누를시 실행하는 이벤트
            alert("submit"); //onSubmit이벤트는  form태그의 고유기능 ㄹㅣ엑트기능x
            this.props.onSubmit(e.target.title.value, e.target.desc.value); // app 컴포넌트의 CreateContent에 onSubmit이벤트 인자로 사용자에게 입력받은 내용 넘김
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          {/* //placeholder 는 text박스안에 빈내용일때 나오는 초기 값 */}
          <p>
            <textarea name="desc" placeholder="text"></textarea>
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

export default CreateContent;
