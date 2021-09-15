
import Title from '../Components/Common/Title';

import {
	Flex,
	Box
} from '@chakra-ui/react';
import Info from '../Components/FindUs/Info';
import Map from '../Components/FindUs/Map';

const FindUs = () => {

	return (  
		<>
		<Title first='trabhar' second='kohtakbl' title='kohtakbl'  />
		<Flex
			flexFlow='row wrap'
			alignItems='center'
			my='50px'
		>
			<Box w={{base:'100%', md:'30%'}} ml={{base:'0', md:'50px'}}>
				<Info />
			</Box>
			<Box w={{base:'100%', md:'60%'}} h='350px'>
				<Map />
			</Box>
		</Flex>
		</>
	);
}
 
export default FindUs;