import React from 'react';
import { Card, CardTitle, CardMedia, CardText,  } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';


const style ={
  backgroundColor: 'rgba(22,22,22, 0.4)',


}



const HomePage = () => (


    <Paper style={style} zDepth={4} className="homepic">
      <CardMedia overlay={<CardTitle title=' Con "Fachada" haz tu casa un hogar'  />}>
     <img src="../css/paintlogo.png" alt="logo" className="Logo" />
    </CardMedia>
    </Paper>

);

export default HomePage;

/*
    <Paper zDepth={4} className="loginform">
      <TextField hintText="Email address" style={style} underlineShow={false} />
      <Divider />
      <TextField hintText="Email address" style={style} underlineShow={false} />
      <Divider />
    </Paper>
*/
