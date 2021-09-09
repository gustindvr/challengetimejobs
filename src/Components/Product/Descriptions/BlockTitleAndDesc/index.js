import {
	Heading,
	Text,
	Box
} from '@chakra-ui/react'

const BlockTitleAndDesc = ({title, description}) => {
	return (  
		<Box 
			my={{base: '20px', md: '40px'}}
		>
			<Heading as="h4" size="md" color='#9a193c' mb='5px'>
				{title}:
			</Heading>
			<Text>
				{description}		
			</Text>
		</Box>
	);
}
 
export default BlockTitleAndDesc;