
import './App.css';

function App() {

  setInterval(() =>{
    const element = (
      <h1>Hello {new Date().toLocaleTimeString()}</h1>
    );

  })
  ReactDOM.render(element,document.getElementById('App')),1000;
  return (
    <div className="">
    </div>
  );
}

export default App;
