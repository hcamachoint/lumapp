//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types'; //ayuda a definir las propiedades y sus tipos a recibir
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const{title, items} = this.props;

    return (
      <MuiThemeProvider>
        <div className="Header">
        <AppBar
          title={title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
          <header>
            <ul className="Menu">
              {
                items && items.map(
                  (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
                )
              }
            </ul>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Header;
