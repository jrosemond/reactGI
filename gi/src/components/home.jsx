import React, { Component } from 'react'

class BasicInfo extends Component {
  constructor(props){
    super();
    this.state = {
                  name:["Jahni Rosemond","Myesha","Jaylin"],
                  number:["704-806-3678"],
                  birthday:["11-29-1997"],
                  email:["jahnirosemond@gmail.com"] 
  };
  }
  render() {
    return (
        <div>
              {this.state.map(name)}
              {this.state.name}
               <br></br>
              {this.state.number}
               <br></br>
              {this.state.birthday}
               <br></br>
              {this.state.email}
        </div>
    )
  }
}
export default BasicInfo;