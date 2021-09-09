import {Flex} from '@chakra-ui/react';
import BoxTitle1 from './BoxTitle1';
import BoxTitle2 from './BoxTitle2';
import BoxTitle3 from './BoxTitle3';
import BoxTitle4 from './BoxTitle4';

const BottomFooter = () => {

	return (  
		<Flex 
			flexFlow='row wrap' 
			justifyContent={{base:'center', md:'space-between'}} 
			w='100%'  
			textAlign={{base:'center', md: 'left'}}
			mt={{base:'100px', md: '50px'}}
		>
			<BoxTitle1 />
			<BoxTitle2 />
			<BoxTitle3 />
			<BoxTitle4 />
		</Flex>
	);
}
 
export default BottomFooter;