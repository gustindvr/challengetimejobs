import {Link} from 'react-router-dom';
import {
	Flex,
	Heading,
	Link as LinkChakra,
} from '@chakra-ui/react';

const BoxTitle1 = () => {
	return (  
		<Flex 
		w={{base: '100%', md: '20%', lg:'25%'}} 
		flexFlow='row wrap' 
		justifyContent='space-around' 
		textAlign={{base:'center', md: 'left'}}
		p='20px'
	>
		<Heading as="h2" size="lg" fontWeight='100' w='100%' >
			Titulo1
		</Heading>
		<LinkChakra fontSize='18px' mr='30px' my='20px'>
			<Link to='!#'>
				link1
			</Link>
		</LinkChakra>
		<LinkChakra fontSize='18px' mr='30px' my='20px'>
			<Link to='!#'>
				link2
			</Link>
		</LinkChakra>
		<LinkChakra fontSize='18px' mr='30px' my='20px'>
			<Link to='!#'>
				link3
			</Link>
		</LinkChakra>
		<LinkChakra fontSize='18px' mr='30px' my='20px'>
			<Link to='!#'>
				link4
			</Link>
		</LinkChakra>
		<LinkChakra fontSize='18px' mr='30px' my='20px'>
			<Link to='!#'>
				link5
			</Link>
		</LinkChakra>
		<LinkChakra fontSize='18px' mr='30px' my='20px'>
			<Link to='!#'>
				link6
			</Link>
		</LinkChakra>
	</Flex>
	);
}
 
export default BoxTitle1;