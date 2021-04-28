import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';

const HatPage = ({ match }) => {
	return <div>hat</div>;
};
function App() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/hats" component={HatPage} />
		</Switch>
	);
}

export default App;
