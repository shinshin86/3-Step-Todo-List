import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import App from './components/App'
import Archives from './components/Archives'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

const store = createStore(todo)

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  typography: {
    useNextVariants: true,
  },
});

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/archives" component={Archives} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
