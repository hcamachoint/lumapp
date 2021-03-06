import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Datos
import items from '../data/menu';

//Estilos
import './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;

    return (
      <div className="App">
        <Header title="Realog"/>
        <Content body={children} />
        <Footer copyright="&copy; Realog 2018" />
      </div>
    );
  }
}

export default App;
