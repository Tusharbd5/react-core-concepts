import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Emon', 'Tushar', 'Tolly King', 'Shuvo']
  const products = [
    {name: 'Photoshop', price: '$99.80'},
    {name: 'Isustrator', price: '$30.00'},
    {name: 'Animate CC', price: '$20.85'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react app </p>
        <Counter></Counter>

        <Users></Users>
        <ul>
          {names.map(name=><li>{name}</li>)}
        </ul>

        <ul>
           {products.map(product => <li>{product.name+" "+product.price}</li>)}
        </ul>

        <Person name = "Sakib Al Hasan" food = "Pizza" passion = "Cricket"></Person>
        
        {products.map(product =><Products product = {product}></Products>)}
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  //const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
          {users.map(user=> <li>{user.name +", "+ user.company.name}</li> )}
      </ul>
      
    </div>
  )
}
function Products(props){
  const productStyle = {
    border: '1px solid gray',
    backgroundColor: 'lightgray',
    color: 'blue',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px gray',
    height: '200px', width:'200px',
    float:'left',
    margin:'10px'
  }
  return(
    <div style = {productStyle}>
      <h3>{props.product.name}</h3>
      <h6 style={{color:'black'}}>Price: {props.product.price}</h6>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle = {
    border: '2px solid red', borderRadius: '10px', padding:'10px', margin:'20px', backgroundColor: 'lightgreen', color : 'black', boxShadow: '5px 5px 10px gray'
  }
  return (
  <div style = {personStyle}>
    <h2>Name: {props.name}</h2>
    <h4>Food: {props.food}</h4>
  <h6>Passion: {props.passion}</h6>
  </div>
        ) 
}

export default App;
