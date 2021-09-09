import {Link} from 'react-router-dom';
import {
	Flex,
	Heading,
	Link as LinkChakra,
} from '@chakra-ui/react';

const BoxTitle3 = () => {
	return (  
		<Flex 
				w={{base: '100%', md: '20%', lg:'25%'}} 
				flexFlow={{base:'column wrap', md: 'column wrap'}}
				justifyContent='space-around' 
				textAlign={{base:'center', md: 'left'}} 
				mb='20px'
			>
				<Heading as="h2" size="lg" fontWeight='100' w='100%' mb='20px'>
					RRSS
				</Heading>
				<LinkChakra>
					<Link to='!#'>
						Icon Vk
					</Link>
				</LinkChakra>
				<LinkChakra>
					<Link to='!#'>
						Icon Facebook
					</Link>
				</LinkChakra>
			</Flex>
	);
}
 
export default BoxTitle3;