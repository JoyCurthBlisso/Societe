import React, { Component } from 'react';
import CustomerCard from "./components/CustomerCard";
import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./customer.json";
import './App.css';

class App extends Component {

  render() {
    return (
      <Wrapper>
      <Title>Customer List</Title>
      {this.state.customer.map(customer => (
        <CustomerCard
          removeCustomer={this.removeCustomer}
          id={Customer.id}
          key={Customer.id}
          name={Customer.name}
          email={email.name}
          patient={patient.name}
        />
      ))}
    </Wrapper>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MyShops for Societe</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
      </div>
    );
  }
}

export default App;
