import React,{useState} from 'react';
import { IUserInput } from './Common/Interfaces';
import SearchBar from './SearchBarComponent/SearchBar';
import MediaGrid from './MediaGridComponent/MediaGrid';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';


import './App.css';
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "virus"
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
        <MediaGrid SearchQuery = {UserInput.SearchQuery}/>
      </MuiThemeProvider>


    </div>
  );
}

export default App;
