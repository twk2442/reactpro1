import "./App.css";
import Toc from "./component/Toc";
import Subject from "./component/Subject";
import Content from "./component/Content";

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web" />
      <Toc />
      <Content cont="HyperText Markup Language, HTML" />
    </div>
  );
} //  리엑트는 가장 바깥쪽에는 하나의 태그로 이루어진다.

export default App;
