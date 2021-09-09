
import {Link} from 'react-router-dom';

import {
	Link as LinkChakra,
	Flex, Text} from '@chakra-ui/react';

const NavBar = () => {

	return (  
		<Flex w='100%' flexFlow='row wrap' justifyContent='space-around'>
				<LinkChakra mx='5px'>
					<Link to='!#'>Link1</Link>
				</LinkChakra>
				<Text>♦</Text>
				<LinkChakra mx='5px'>
					<Link to='!#'>Link2</Link>
				</LinkChakra>
				<Text>♦</Text>
				<LinkChakra mx='5px'>
					<Link to='!#'>Link3</Link>
				</LinkChakra>
				<Text>♦</Text>
				<LinkChakra mx='5px'>
					<Link to='!#'>Link4</Link>
				</LinkChakra>
				<Text>♦</Text>
				<LinkChakra mx='5px'>
					<Link to='!#'>Link5</Link>
				</LinkChakra>
				<Text>♦</Text>
				<LinkChakra mx='5px'>
					<Link to='/contacto'>Contacto</Link>
				</LinkChakra>
		</Flex>
	);
}
 
export default NavBar;