import logo from './logo_new.png';
import './App.css';
import { Provider } from 'react-redux'
import { Button } from '@material-ui/core'
import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#337C7E' }
  }
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        
      <MuiThemeProvider theme={theme}>
      <Button variant="contained" style={{ "fontSize":"50px","min-height": "150px", width: "35%" }} color="primary" size="large">
        새로 맞추기zz
      </Button>
      <br></br>
      <Button variant="contained" style={{ "fontSize":"50px","min-height": "150px", width: "35%" }} color="primary" size="large">
        기존 컴퓨터 업그레이드
      </Button>
        </MuiThemeProvider>
      
      
     
      
        
      </header>
    </div>
  );
}

export default App;
