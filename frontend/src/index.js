import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers'
import App from './components/App'
import Archives from './components/Archives'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const store = createStore(todo)

render(
  <MuiThemeProvider>
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
