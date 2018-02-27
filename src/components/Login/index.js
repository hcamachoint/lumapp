//Dependencias
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <TextField hintText="Email" floatingLabelText="Email"/><br />
          <TextField hintText="Password" floatingLabelText="Password" type="password"/><br /><br />
          <RaisedButton label="Login" primary={true}/><br /><br />
          <a href="/register">register</a>
        </div>
      </MuiThemeProvider>
    );
  };
}

export default Login;
