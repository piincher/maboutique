import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/shop" component={ShopPage} />
		</Switch>
	);
}

export default App;
