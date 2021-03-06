import React from 'react';
import Home from './interface/menu';
import Login from './interface/login';
import Flash from './interface/teste';
import User from './interface/user';
//import Del from './interface/delete';
import Register from './interface/register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './utils/private';

class App extends React.Component {
    render() {
        return (
		<div>
		<Router>
		<div>
		<Route exact path="/" component={Home} />
		<Route path="/login" component={Login} />
		<PrivateRoute path="/flash" component={Flash} />
		<Route path="/register" component={Register} />
		<PrivateRoute path="/user" component={User} />
		</div>
		</Router>
		</div>
	);
    }
}


export default App;
