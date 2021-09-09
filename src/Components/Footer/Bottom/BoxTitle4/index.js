import {Link} from 'react-router-dom';
import {
	Flex,
	Heading,
	Link as LinkChakra,
} from '@chakra-ui/react';

const BoxTitle4 = () => {
	return (  
		<Flex 
				w={{base: '100%', md: '20%', lg:'25%'}} 
				flexFlow={{base:'column wrap', md: 'column wrap'}}
				justifyContent='space-around' 
				textAlign={{base:'center', md: 'left'}} 
				mb='20px'
			>
				<Heading as="h2" size="lg" fontWeight='100' w='100%' mb='20px'>
						Titulo 4
					</Heading>
				<LinkChakra>
					<Link to='!#'>
						link1
					</Link>
				</LinkChakra>
				<LinkChakra>
					<Link to='!#'>
						link2
					</Link>
				</LinkChakra>
			</Flex>
	);
}
 
export default BoxTitle4;