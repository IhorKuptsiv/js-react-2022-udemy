//import logo from './logo.svg';

//import React from 'react';
import { Component } from 'react';
//import { Component,StrictMode} from 'react';
import './App.css';

//---------10. Властивості компонентів 
//function WhoAmI(props) {//props - аргумент функції(обєкт з даними які передамо)
//function WhoAmI({ name, surname, link }) {
//перероблюємо в КЛАС

 //--------13 React basic - Стан компонентів
  //1. У компонентах можу бит внутр. стан який динамічно змін.
  //2. Воно може бути як в класових і функці компонентах
  //3. state напряму мінювати не можна, тільки через setState
  //4. setState або зміна state це асинхронна операція .
  // Якщо потрібна точність і послідовність ми передаємо callback
  //5. В setState ми можемо міняти ті властивості обєкту стану
  // які нам потрібні, інші не змінюються
// метод render відповідає за вивід на сторінку в Класах

class WhoAmI extends Component { 
  constructor(props) {
    super(props);
    //props змінювати не можна, вони тільки для читання
    // змінювати можна state
    // обєкт
    this.state = {
      //цю властивість можна змінювати 
      years: 27,
      text: '+++',
      position: ''
    }
    //this.nextYear властивість у екземпляра класу
    //this.nextYear метод який є в класі
    //ми його біндимо bind до екземпляру конкретного класу через this 
   // this.nextYear = this.nextYear.bind(this);
  }
  
  //nextYear() { // коли анонімна стрілочна функція
  //nextYear () {  //коли bind
  nextYear = () => {
    //setState - можна змінювати. запускає перерендер всього стану
    this.setState(
    //приймає обєкт з новим станом
    //  years: this.state.years + 1
      
    //в setState передаємо функцію
    // в функцію передаємо 1 аргумент state
    // ця функція повертає інший обєкт  years: state.years + 1
    // setState(   ) - дужки замість return
      state => ({
        years: state.years + 1
      }))
    
  }
  commitInputChanges = (e, color) => {
    console.log(color);
    //e.target -  можна взнати у елемента подій
    // на якій подіх відбулась ця подія
  //console.log(e.target.value)
    
    //змінюємо стейт
    this.setState({
      position: e.target.value
    })
}

 
  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
       <>
      
    {/* <div className="App"> */}
        {/* <h1>My name is {props.name}, surmane - {props.surname} </h1> */}
      {/* <a href={props.link}> My profile</a> */}
  
      {/* Викликаємо обєкти */}
      {/* <h1>My name is {name.firstName}, surmane - {surname} </h1> */}
  
        {/* подія з методом nextYear-- назва методу а не виклик */}
         <button onClick={this.nextYear}>{this.state.text}</button> 
        {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> */}
        {/* Викликаємо функцію */}
        <h1>My name is {name},
          surmane - {surname},
          age - {years},
          position - {position}</h1>
        <a href={link}> My profile</a>
        <form >
          <span>Введіть посаду</span>

          {/* При введені в інпут попадали дані в стан а потім в верстку */}
          {/* <input type="text" onChange={this.commitInputChanges}/> */}
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
        </form>

         {/*  </div>  */}
         </> 
    )
}
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
      {/* <StrictMode>
          <Header/> 
      </StrictMode> */}
      <Field />
      <Btn/>
      
      {/* <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Sheprd" link="instagram.com"/> */}

      {/* Передаємо обєкти */}
      {/* <WhoAmI name ={{firstName: 'Ronald'}} surname="Lalal" link="facebook.com"/> */}
      
      {/* Передаємо функції */}
      {/* <WhoAmI name={()=> {return 'Jogggn'}} surname="Lalal" link="facebook.com" /> */}
      
      {/* Передаємо в клас */}
      <WhoAmI name='John' surname="Smith" link="facebook.com" />
      <WhoAmI name='Alex' surname="Shep" link="insta.com" />
      
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
