import React from "react";
const Hello = () => {
   // return (
    //    <div>
     //       <h1> Hello Vishaw</h1>
     //   </div>
   // )
   return React.createElement('div',{id: 'hello-div',className
    : 'dummyclass'}, React.createElement('h1',null, 'Hello Houston'))
}

export default Hello