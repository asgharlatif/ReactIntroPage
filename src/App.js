
import { getAllByPlaceholderText, getDefaultNormalizer } from '@testing-library/react';
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
function App({ name, age }) {


  return <div className="outPopUp" >Hello  <strong className="mycss"> {name}  ! </strong> . Your are turning into {age - 5}s now
  <br /><br />
    <header>Following are few names out of many companies I am working for in real life projects for Data Integeration.</header>

    <ul>
      <li>Amazon</li>
      <li>7-11 Store Chain</li>
      <li>United Airline</li>
      <li>Nextera Engery</li>
      <li>Ampacet</li>
      <li>Costco</li>
      <li>Starbucks</li>
      <li>Choice</li>
    </ul>

    <ul>
      <li>LivePerson</li>
      <li>ULTA</li>
      <li>Wayfair</li>
      <li>Transunion</li>
    </ul>

Currently I am trying to learn React & Amazon Web Services (AWS) which are very crucial to learn for me not only for my current job but to do my future free-lancing business which I am planning for.
<br /><br />

Thanks to <b> Sir Zia </b> for teaching all of us this latest technology and helping us out.


<br /><br />

    <span>Assignment # 1 , Completed on 1/1/2021. </span>

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

