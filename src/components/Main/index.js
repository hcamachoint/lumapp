//Dependencias
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Index extends Component{

  render(){
    return(
      <MuiThemeProvider>
        <Card style={style}>
          <CardHeader
            title="Index Page"
            subtitle="Subtitle"
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <RaisedButton href="/login" label="Login" primary={true} style={style} />
          <RaisedButton href="/register" label="Register" primary={true} style={style} />
        </Card>
      </MuiThemeProvider>
    );
  };
}

export default Index;
