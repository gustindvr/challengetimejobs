import {Container, Text, Flex} from '@chakra-ui/react';

const Title = ({first, second, title}) => {
	return (  
		<Container maxW="container.sm" mt='50px'>
			<Flex flexFlow='row wrap' textTransform='uppercase' justifyContent='center' textAlign='center' my='10px'>
				<Text textDecoration='underline' textDecorationColor='gray.300' fontSize='16px'>{first}</Text>
				<Text mx='10px' color='gray.300'>♦</Text>
				<Text  fontSize='16px' color='gray.300'>{second}</Text>
			</Flex>
			<Flex flexFlow='row wrap' textTransform='uppercase' justifyContent='center' textAlign='center'>
				<Text fontSize='24px'>{title}</Text>
			</Flex>
		</Container>
	);
}
 
export default Title;