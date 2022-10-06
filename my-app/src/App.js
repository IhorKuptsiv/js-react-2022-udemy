//import logo from './logo.svg';

//import React from 'react';
import { Component,StrictMode} from 'react';
import './App.css';

//---------10. Властивості компонентів 
//function WhoAmI(props) {//props - аргумент функції(обєкт з даними які передамо)
function WhoAmI({name, surname, link}) {
return (
    <div>
      {/* <h1>My name is {props.name}, surmane - {props.surname} </h1> */}
    {/* <a href={props.link}> My profile</a> */}

    {/* Викликаємо обєкти */}
    {/* <h1>My name is {name.firstName}, surmane - {surname} </h1> */}

    
    {/* Викликаємо функцію */}
    <h1>My name is {name()}, surmane - {surname} </h1>
    
    <a href={link}> My profile</a>
    </div>
  )
}


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
      {/* StrictMode активуємо для перевірки <Header/>  */}
      <StrictMode>
          <Header/> 
      </StrictMode>
      <Field />
      <Btn/>
      
      {/* <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Sheprd" link="instagram.com"/> */}

      {/* Передаємо обєкти */}
      {/* <WhoAmI name ={{firstName: 'Ronald'}} surname="Lalal" link="facebook.com"/> */}
      
      {/* Передаємо функції */}
      <WhoAmI name={()=> {return 'Jogggn'}} surname="Lalal" link="facebook.com" />
      
      
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
