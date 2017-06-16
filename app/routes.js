import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import Home from './components/Home';
import TodoApp from './components/TodoApp';
import CurrencyApp from './components/CurrencyApp';

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/todo" component={TodoApp} />
		<Route path="/filter" component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/currency" component={CurrencyApp} />
	</Switch>
);
