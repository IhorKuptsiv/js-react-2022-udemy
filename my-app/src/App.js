//import logo from './logo.svg';

//import React from 'react';
import { Component } from 'react';

import './App.css';


const Header = () => { //реакт компонент
  return <h2>Hello!</h2> //реакт елемент
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };
//   //return <input placeholder="Type here" type="text"/>
//   return <input
//     placeholder={holder}
//     type="text"
//     style={styledField} />
// }

// Компонент Field через Class

//import React from 'react'; імпортуємо !!
//!!! потнібно унаслідувати поведінку від базового класу
//class Field extends React.Component{
  class Field extends Component{
    render() {
      const holder = 'Enter here';
      const styledField = {
      width: '300px'
      };
   return <input
   placeholder={holder}
   type="text"
   style={styledField} />
 }
}


function Btn() { // Компонент
  //const text = 'Log in'; //Елемент текст
 // const res = () => { //Елемент функція
  //  return 'Log in';
 // }
  //const p = <p>Log in </p> //Елемент в середині елементу
  //return <button>{text}</button> //змінна
  //return <button>{res()}</button> //функція
  //return <button>{p}</button> // елемент в елементі
  //return <button>{3+4}</button> // вирази
  

  const text = 'Log in'; //Елемент текст
  
  const logged = true;// елемент з умовою. true - Enter, false - Log in
  // якщо logged - тру = Enter, якщо logged - фолс = text
  return <button>{logged ? 'Enter' : text}</button> //умова


}



//App - це компонент-- функція яко може повертати JSX елементи
// в середині себе мають якусь поведінку
function App() {// Компонент з великої букви
  return (
    <div className="App">
      <Header/> 
      <Field />
      <Btn/>



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export { Header }; // експорт в index.js
export default App;
