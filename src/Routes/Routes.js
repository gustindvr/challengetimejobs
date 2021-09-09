import Header from "../Components/Header";
import NavBar from "../Components/Navbar";
import Home from '../Pages/Home';
import Footer from "../Components/Footer";

import {
	BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Divider, Box } from "@chakra-ui/react";
import styles from '../Styles/header.module.css';
import ShoppingCart from "../Pages/ShoppingCart";
import Contacto from "../Pages/Contacto";
import Product from "../Pages/Product";

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
					<Route exact path='/contacto' >
						<Contacto/>
					</Route>
					<Route exact path='/product' >
						<Product />
					</Route>
				</Switch>
				<Box p='50px' className={styles.backgroundImgFooter}>
					<Footer />
				</Box>
			</Router>
		</>
	);
}

export default Routes;