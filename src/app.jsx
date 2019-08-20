import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';
import style from './app.css';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<Switch>
					<Route path="/" exact>
						<div className={style.app}>React starter</div>
					</Route>
					<Route path="/About" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Provider>
		</Router>
	);
};

export default hot(module)(App);
