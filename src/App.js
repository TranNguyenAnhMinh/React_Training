// import logo from './logo.svg';
import './App.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';
import MyComponent from './components/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        Hello
        <MyComponent></MyComponent>
      </div>
    )

  }
}


//Arow func

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          Helloooooo
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
