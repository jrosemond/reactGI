import './App.css';
// import Home from './components/home';
import React, { Component } from 'react'
import BasicInfo from './components/home';

//very-easy

// class App extends Component {
//   render() {
//     return (
//       <div>
//        <h1>Basic Info</h1>
//        Jahni Rosemond
//        11-29-1997
//        Charlotte,NC
//        704-806-3678
//       </div>
//     )
//   }
// }

// export default App;

//Easy

// class App extends Component {
//   constructor(props){
//     super();
//     this.state = {person:""};
//     render() {
//       return (
//         <div className="Info">
//           <h1>Basic Info</h1>
//           Jahni Rosemond
//           11-29-1997
//           Charlotte,NC
//           704-806-3678                                           
//       </div>
//       )
//     }
//   }
  
//   export default App;


//Medium 



// class App extends Component {
//     constructor(props){
//       super();
//       this.state = {name:"Jahni Rosemond",
//                     number:"704-806-3678",
//                     birthday:"11-29-1997",
//                     email:"jahnirosemond@gmail.com", 
//     };
//     }
//   render() {
//     return (
//       <div>
//             <h1>Clients</h1>
//               <BasicInfo/>                                           
//       </div>
//     )
//   }
// }

// export default App;


// Hard

class App extends Component {
  constructor(props){
    super();
    this.state = { people: [] 
              };
  }
render() {
  return (
    <div>
          <h1>Clients</h1>
            <BasicInfo/>                                           
    </div>
  )
}
}

export default App;