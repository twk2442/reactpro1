import "./App.css";
import Toc from "./component/Toc"; // 출처 위치표시하고 사용가능  명시
import Subject from "./component/Subject"; // 출처 위치표시하고 사용가능  명시
import Content from "./component/Content"; // 출처 위치표시하고 사용가능  명시
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" },
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <Toc></Toc>
        <Content desc="HTML is HyperText Markup Language. "></Content>
      </div>
    );
  }
}

export default App; // 추출가능 명시
