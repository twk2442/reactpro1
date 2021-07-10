import "./App.css";
import Toc from "./component/Toc"; // 출처 위치표시하고 사용가능  명시
import Subject from "./component/Subject"; // 출처 위치표시하고 사용가능  명시
import ReadContent from "./component/ReadContent"; // 출처 위치표시하고 사용가능  명시"
import Control from "./component/Control"; // 출처 위치표시하고 사용가능  명시
import CreateContent from "./component/CreateContent";
import { Component } from "react";
import Update from "./component/Update";

class App extends Component {
  constructor(props) {
    // constructor 내부에서는 state를 직접 수정 가능
    super(props);
    this.max_id = 3; // 현재 menu의 최대 id개수
    this.state = {
      mode: "welcome", // 이벤트
      defid: 0,
      welcome: { title: "welcome", desc: "hello react" }, // 이벤트발생시 내용 state
      subject: { title: "WEB", sub: "World Wide Web!" },
      menu: [
        // state도 배열로 만들 수 있다.
        { id: 1, title: "HTML", desc: "hypertext markup langage" },
        { id: 2, title: "CSS", desc: "styleshit" },
        { id: 3, title: "java Script1", desc: "js" },
      ],
    };
  } // props 나 state 가 바뀌면  랜더함수가 다시 호출된다

  GetReadContent() {
    var i = 0;
    while (i < this.state.menu.length) {
      var data = this.state.menu[i];
      if (data.id === this.state.defid) {
        return data;
        break;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      //이벤트 모드 welcome 일때
      _title = this.state.welcome.title; // 기본 state welcome title desc실행
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.GetReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            // menu 추가
            // state에다가 값을 추가할때에는 push와 같이 오리지널데이터 추가하는 것을
            //쓰지말고 concat같이 복사하는것 사용할것
            this.max_id = this.max_id + 1;
            var _menu = this.state.menu.concat({
              // 원본 복사후 새로운스테이트 만들어서 수정 // immutable
              id: this.max_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              menu: _menu,
              mode: "read",
              defid: this.max_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      _content = this.GetReadContent();
      if (!this.state.id) {
        alert("업데이트할 목록을 클릭하세요");
        this.setState({
          mode: "welcome",
        });
      } else {
        _article = (
          <Update
            data={_content}
            onSubmit={function (_id, _title, _desc) {
              // menu 추가
              // state에다가 값을 추가할때에는 push와 같이 오리지널데이터 추가하는 것을
              //쓰지말고 concat같이 복사하는것 사용할것

              var _menu = Array.from(this.state.menu); // 원본 복사후 새로운스테이트 만들어서 수정 // immutable ,,  방법 여러가지 ( concat이랑 효과는 동일)
              var i = 0;
              while (i < _menu.length) {
                if (_menu[i].id === _id) {
                  _menu[i] = { id: _id, title: _title, desc: _desc };
                  break;
                }
                i = i + 1;
              }
              this.setState({
                menu: _menu,
                mode: "read",
              });
            }.bind(this)}
          ></Update>
        );
      }
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChange={function () {
            this.setState({ mode: "welcome" }); // why?  this.state.mode='~~" 같은 직접접근방식으로 수정하면 리엑트가 state의 변화를 인지 못한다
          }.bind(this)} // onChange 를 Subject.js 에서 props로 받는다(이벤트를 프롭스로 받아버림), 바인드함수를통해 this사용가능하게한다.
        ></Subject>
        <Toc
          data={this.state.menu}
          onChange={function (id) {
            this.setState({ mode: "read", defid: Number(id) }); //  TOC컴포넌트와 서로 상호작용 , 인자 id 값을 TOC에서 받아와서 defid값을 바꿔줌
          }.bind(this)}
        ></Toc>
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really delete?")) {
                var _menu = Array.from(this.state.menu);
                var i = 0;
                while (i < _menu.length) {
                  if (_menu[i].id === this.state.defid) {
                    _menu.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: "welcome",
                  menu: _menu,
                });
              }
            }
            this.setState({ mode: _mode });
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App; // 추출가능 명시
