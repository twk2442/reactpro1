import "./App.css";

function Subject(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.sub}
    </header>
  );
}

function Toc() {
  return (
    <nav>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </nav>
  );
}
function Content(props) {
  return <article>{props.cont}</article>;
}

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
