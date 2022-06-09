import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      title: 'Hello From Bridgelabz'
    }
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} className="App-logo" alt="logo" />
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
