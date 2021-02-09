import Header from './components/header';
import Form from './components/form';
import logo from './images/logo.png';
import './App.css';


function App() {
  return (
    <div className="app">
      <img className="header-logo" src={logo} height={'50px'}/>
      <div className="body">
        <Header/>
        {/* <Call/> */}
        <div className="content">
        <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
