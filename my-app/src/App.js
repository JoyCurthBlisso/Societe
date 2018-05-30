import React, { Component } from 'react';
// import CustomerCard from "./components/CustomerCard";
import logo from './societe_S_circle_black.png';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title/Title.js";
// import customer from "./customer.json";
import './App.css';
// import './components/nav/nav.css';
import './components/nav/nav.js';


  const Header = ({title}) => (<header>{title}</header>);
  const Main = ({title}) => (<main>{title}</main>);
  const Footer = ({title}) => (<footer>{title}</footer>);


class App extends Component {

      // state = {
      //   customers
      // };
    
      // removeCustomer = id => {
      //   // Filter this.state.friends for friends with an id not equal to the id being removed
      //   const customers = this.state.customers.filter(customer => customer.id !== id);
      //   // Set this.state.friends equal to the new friends array
      //   this.setState({ customers });
      // };
    
      render() {
        const {header,main,footer} = this.props;

        return (

        //     <Wrapper>
        //     <Title>Customer List</Title>
        //     {this.state.customer.map(customer => (
        //       <CustomerCard
        //         removeCustomer={this.removeCustomer}
        //         id={Customer.id}
        //         key={Customer.id}
        //         name={Customer.name}
        //         email={email.name}
        //         patient={patient.name}
        //       />
        //     ))}
        //   </Wrapper>
        //   );
        // // }

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Societe</h1>
        </header>


        <p className="App-intro">


          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
