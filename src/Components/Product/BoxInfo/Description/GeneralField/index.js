
import {
	SimpleGrid,
	Text
} from '@chakra-ui/react';

const GeneralField = ({name, value}) => {
	return (  
		<SimpleGrid
			columns={{base: 1, md: 2}}
			spacing={5}
			textAlign={{base: 'center', md: 'start'}}
			justifyContent='space-between'
			fontSize='14px'
			mb='20px'
			mx={{base:'80px', md: '0'}}
			w={{base:'100%'}}
		>
			<Text textTransform='capitalize' mr='20px'>{name}</Text>
			<Text display='inline-block' fontWeight='bold' >{value}</Text>
		</SimpleGrid>
	);
}
 
export default GeneralField;