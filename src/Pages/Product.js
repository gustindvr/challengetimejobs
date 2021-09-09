
import {
	Flex,
	Box
} from '@chakra-ui/react';
import BoxInfo from '../Components/Product/BoxInfo';
import Descriptions from '../Components/Product/Descriptions';

const Poduct = () => {


	return (  
		<Flex
			flexFlow='row wrap'
		>
			<Box>
				<BoxInfo />
			</Box>
			<Box flexBasis={{base:'100%', md: '40%'}}>
				imagen gigante
			</Box>
			<Box>
				<Descriptions />
			</Box>
			<Box flexBasis='100%'>
				Otros Productos
			</Box>
		</Flex>
	);
}
 
export default Poduct;