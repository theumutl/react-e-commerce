import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import {data } from './Data';
import Counter from './Counter';
import {Link} from 'react-router-dom';
import Order from './Order';






class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0,
      order:{},
      products:{}
      
    }
  }

  changeCounter=(status)=>{
   
    this.setState({
      count: this.state.count+status,
      isToggleOn:!this.state.isToggleOn,
     
     
    })
  // console.log(status);
  }  

  
  render() {
    return (
      <div className="Title">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to='/' activeClassName='hurray'><h1 className="App-title">Name of the store</h1></Link>
          <span>Carrito</span>
          <Counter count={this.state.count}/>
          <Link to='/checkout' activeClassName='hurray'>Checkout</Link>
        </header>
        <p className="App-intro">
          Lista de productos
        </p>
        {data.products.map((product)=><Product 
        changeCounter={this.changeCounter} title={product.title} 
        description={product.description} price={product.price} 
        img={product.imageUrl} id={product.id}/>)}
      </div>
    );
  }
}



export default App;
