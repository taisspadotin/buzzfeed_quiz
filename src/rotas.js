import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Quizzes from './pages/quiz/quizzes';

const Main = () =>(
	<BrowserRouter>
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/quizzes" component={Quizzes} />
	</Switch>
	</BrowserRouter>
)

export default Main;
