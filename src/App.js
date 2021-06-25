import "./App.css";
import Toc from "./component/Toc"; // 출처 위치표시하고 사용가능  명시
//import Subject from "./component/Subject"; // 출처 위치표시하고 사용가능  명시
import Content from "./component/Content"; // 출처 위치표시하고 사용가능  명시
import { Component } from "react";

class App extends Component {
  constructor(props) {  // constructor 내부에서는 state를 직접 수정 가능 
    super(props);
    this.state = {
      mode: 'read',  // 이벤트 
      welcome: {title: 'welcome', desc:'hello react'}, // 이벤트발생시 내용 state 
      subject: { title: "WEB", sub: "World Wide Web!" },
      menu: [
        // state도 배열로 만들 수 있다.
        { id: 1, title: "HTML" , desc: "hypertext markup langage"},
        { id: 2, title: "CSS"  , desc: "styleshit"},
        { id: 3, title: "java Script1" , desc: "js" },
      ],
    };
  } // props 나 state 가 바뀌면  랜더함수가 다시 호출된다
  render() {
    var _title,_desc = null;
    if(this.state.mode === 'welcome'){  //이벤트 모드 welcome 일때 
      _title = this.state.welcome.title;  // 기본 state welcome title desc실행 
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){   
      _title = this.state.menu[0].title;
       _desc =  this.state.menu[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            // this.state.mode ='welcome' ..2)   
            this.setState({   // constructor 외부이기때문에 2)와같은 방식의 state 수정은 불가 
              mode:'welcome'  // why?  리엑트가 state의 변화를 인지 못한다. 
            });  // bind 함수를 통해  this 사용가능 
          }.bind(this)}>{this.state.subject.title}</a></h1>   
          {this.state.subject.sub}
        </header>
        <Toc data={this.state.menu}></Toc>
        <Content title={_title} desc={_desc} ></Content>
      </div>
    );
  }
}

export default App; // 추출가능 명시
