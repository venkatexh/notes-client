import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { configureStore } from './store'
import App from './App';
import { setAuthorizationToken, setCurrentUser } from './store/actions/auth'


const store = configureStore()

if(localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken)
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
	} catch(e) {
		store.dispatch(setCurrentUser({}))
	}
}

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
