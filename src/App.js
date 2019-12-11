import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom'
import VendorPage from './components/VendorPage'
import MainPage from './components/MainPage';
import ClientPage from './components/ClientPage';
import history from './services/history'


class App extends React.Component {

	render() {
		return (
			<Router history={history}>
				<div className="App">
					<header className="App-header">
						<Switch>
							<Route exact path='/' component={MainPage}></Route>
							<Route exact path='/vendor' component={VendorPage}></Route>
							<Route exact path='/client' component={ClientPage}></Route>
						</Switch>
					</header>
				</div>
			</Router>
		);
	}
}

export default App;
