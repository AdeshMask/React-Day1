import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

  url = 'https://github.com/AdeshMask'
  constructor() {
    super()
    this.state ={
      title: 'Hello From Bridgelabz'
    }
  }

  //onClick Function
  onClick = ($event) => {
    console.log('Save button is clicked !', $event);
    window.open(this.url, "_blank");
  }

  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick} 
        className="App-logo" alt="logo" />
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to Reactjs !!!!!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
