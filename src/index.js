import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Home from './components/home';
import Main from "./components/main";
import NotFound from "./components/notfound";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
	        <Router>
	            <Switch>
		    		<Route exact path='/' component={Home} />
		    		<Route path='/:width/:height' component={Main} />

		    		<Route path='' component={NotFound} />
				</Switch>
	        </Router>
	    )
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();