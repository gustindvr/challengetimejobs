import Header from "../Components/Header";
import NavBar from "../Components/Navbar";
import Home from '../Pages/Home';
import Footer from "../Components/Footer";

import {
	BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Divider, Box } from "@chakra-ui/react";
import styles from '../Styles/header.module.css';
import ShoppingCart from "../Pages/ShoppingCart";
import FindUs from "../Pages/FindUs";
import Product from "../Pages/Product";
import Error404 from "../Components/Errors/404";

const Routes = () => {
	return ( 
		<>
			<Router>
				<Box mb='50px' pb='50px' px='100px'	className={styles.backgroundImgHeader}>
					<Header />
					<Divider my='50px' />
					<NavBar />
				</Box>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/shopping-cart' >
						<ShoppingCart />
					</Route>
					<Route exact path='/find-us' >
						<FindUs/>
					</Route>
					<Route exact path='/product/:id' >
						<Product />
					</Route>
					<Route component={Error404} />
				</Switch>
				<Box p='50px' className={styles.backgroundImgFooter}>
					<Footer />
				</Box>
			</Router>
		</>
	);
}

export default Routes;