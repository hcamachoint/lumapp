//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types'; //ayuda a definir las propiedades y sus tipos a recibir
import { Link } from 'react-router-dom';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const{title, items} = this.props;

    return (
      <div className="Header">
        <header>
          <h1>{title}</h1>
          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
