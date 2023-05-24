// import Child from './Child';

// function App()
// {
//     let a=10;
//     let b= "hello mithun";
//     let c=[100,20];
//     let d={d1:1000,d2:20};
//     let e= ()=>{alert("hello")};

//     return(
//         <>
//         <Child a={a} b={b} c={c} d={d} e={e}/>
//         </>
//     );
// }
// export default App
//import logo from './logo.svg';
// import {useState} from 'react';
// import './App.css';
import Displayproduct from './Displayproduct';
// import Child from './Child';

// function App()
// {
//     let a=10;
//     let b= "hello mithun";
//     let c=[100,20];
//     let d={d1:1000,d2:20};
//     let e= ()=>{alert("hello")};

//     return(
//         <>
//         <Child a={a} b={b} c={c} d={d} e={e}/>
//         </>
//     );
// }

function App()
{
  return(
    <>
    <Displayproduct/>
    <Displayproduct/>
    <Displayproduct/>
    <Displayproduct/>
    <Displayproduct/>
    </>
  );
}

// function App() {
//   let [val,setVal] = useState(10)

//   let increseVal = ()=>{
//     setVal(val+10);
//   }
//   let decreseVal = ()=>{
//     setVal(val-10);
//   }
//   return (
//     <>
//     <h1>{val}</h1>
//     <button onClick={increseVal}>increse value</button>
//     <button onClick={decreseVal}>decrese value</button>
//     </>
//   );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

export default App;