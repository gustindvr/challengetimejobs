
import {
	Flex,
	Box
} from '@chakra-ui/react';
import BoxInfo from '../Components/Product/BoxInfo';

const Poduct = () => {


	return (  
		<Flex
			flexFlow='row wrap'
			
		>
			<Box>
				<BoxInfo />
			</Box>
			<Box>
				imagen gigante
			</Box>
		</Flex>
	);
}
 
export default Poduct;