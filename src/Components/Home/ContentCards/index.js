import {Flex} from '@chakra-ui/react';

import Card from "./Card";

const ContentCars = () => {
	return (  
		<Flex flexFlow='row wrap' >
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</Flex>
	);
}
 
export default ContentCars;