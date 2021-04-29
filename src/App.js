import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
