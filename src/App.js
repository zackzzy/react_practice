import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import StateComponent from './StateComponent';
import ComponentLife from './ComponentLife';

class App extends React.Component {
 
  render(){
    const nav1 = ["Home","Study","Video","Profile"]
    const nav2 = ["Test","111","222","333"]
    return (
      <div>
        <Home/>
        <Nav nav = {nav1} title="Navigation"/>
        <Nav nav = {nav2} title="This is a test"/>
        <StateComponent/>
        <ComponentLife/>
      </div>

    )


  }

}

export default App















// const isLoading = true
// const loadData = ()=> {
//   if (isLoading) {
//     return <div>loading</div>
//   }

//   return <div>Done</div>
// }


// function App() {
//   return(
//     <h1>
//     条件渲染:{loadData()}

//     </h1>
//   )
  




//   // return (
//   //   <div className="App">
//   //     <div className='div-0'>
//   //       <div className='div-1'>
//   //         111
//   //       </div>
//   //       <div className='div-2'>
//   //         222
//   //       </div>
//   //       <div className='div-3'>
//   //         333
//   //       </div>
//   //       <div className='div-4'>
//   //         444
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
// }


