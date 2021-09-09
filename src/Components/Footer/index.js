import {Container} from '@chakra-ui/react';
import TopFooter from './Top';
import BottomFooter from './Bottom';

const Footer = () => {
	return (  
		<Container maxW='container.xl' >
			<TopFooter />
			<BottomFooter />
		</Container>
	);
}
 
export default Footer;