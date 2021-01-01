
import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Hello from './Hello';


/*
  --Method 3

function App(user) {  
  let {name,age} = user;
  return <div>Hellop from App.js updated.<br /> Name = {name} , age =  {age-14}
    </div>
  }
*/
  

 /*Method 1*/
function App({name,age}) {
return <div>Hellop from <strong className="mycss"> App.js </strong> updated.<br /> Name = {name} , age =  {age-15}
    <br />
  <Hello name={name} age = {age}/>
  </div>
}



/*
--Method 2
function App(props) {
return <div>Hellop from App.js updated.<br /> Name = {props.name} , age =  {props.age-10}
  </div>
}

*/

export default App;
