//Dependencias
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Register extends Component{
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <TextField hintText="Name" floatingLabelText="Name"/><br />
          <TextField hintText="Email" floatingLabelText="Email"/><br />
          <TextField hintText="Password" floatingLabelText="Password" type="password"/><br />
          <TextField hintText="Password Confirmation" floatingLabelText="Password Confirmation" type="password"/><br /><br />
          <RaisedButton label="Register" primary={true}/>
        </div>
      </MuiThemeProvider>
    );
  };
}

export default Register;
