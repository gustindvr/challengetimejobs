import {
	Container,
	Flex, 
	Box
} from '@chakra-ui/react';
import BoxAddCart from './BoxAddCart';
import Description from './Description';
import Title from './Title';

const BoxInfo = () => {
	return (  
		<Container maxW='container.sm'>
			<Flex
				flexFlow='row wrap'
				textAlign={{base: 'center', md: 'start'}}
				justifyContent={{base: 'center', md: 'start'}}
				w={{base:'100%', md:'70%'}}
				ml={{base: '0', md:'10%'}}
			>
				<Title 
					variant='rnabhar' 
					category='katanor tobapob' 
					title='camepabn' 
					variantGrape='kpachoe monycrañkoe'
					measure='0.75 n.'
				/>
				<Description />
				<BoxAddCart />
			</Flex>
			<Box></Box>
		</Container>
	);
}
 
export default BoxInfo;