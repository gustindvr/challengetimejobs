import {
	Flex, 
	Text,
	Box,
	Icon
} from '@chakra-ui/react';

import {GiWineBottle, GiGrapes} from 'react-icons/gi';

const Title = ({variant, category, name, grape}) => {
	return ( 
		<>
			<Flex 
				flexFlow='row wrap' 
				textTransform='uppercase' 
				justifyContent='center' 
				textAlign={{base:'center', md:'start'}}
				my='10px'
				w={{base:'100%'}}
			>
					<Text 
						textDecoration='underline' 
						textDecorationColor='gray.300' 
						fontSize={{base: '12px', md: '18px'}}
					>
						{variant}
					</Text>
					<Text mx='10px' color='gray.300'>♦</Text>
					<Text 
						textDecoration='underline' 
						textDecorationColor='gray.300' 
						fontSize={{base: '12px', md: '18px'}} 
					>
						{category}
					</Text>
				</Flex>
				<Flex 
					flexFlow='row wrap' 
					textTransform='uppercase' 
					justifyContent={{base:'center', md:'start'}}
					textAlign={{base:'center', md:'start'}}
					w={{base:'100%'}}
				>
					<Text fontSize='30px'>
						{name}
					</Text>
			</Flex>
			<Flex 
				flexFlow='row wrap' 
				textTransform='uppercase' 
				justifyContent={{base:'center', md:'start'}}
				textAlign={{base:'center', md:'start'}}
				w={{base:'100%'}}
			>
					<Text fontSize='14px' fontWeight='100'>venta distributions</Text>
			</Flex>
			<Flex 
				flexFlow='row wrap' 
				textTransform='uppercase' 
				justifyContent='center' 
				textAlign={{base:'center', md:'start'}}
				my='30px'
				w={{base:'100%'}}
			>		
				<Box w={{base:'100%'}}>
					<Icon as={GiGrapes} w='20px' color='#9a193c ' />
					<Text fontSize='12px' fontWeight='100' display='inline-block'>{grape}</Text>
				</Box>
				<Box w={{base:'100%'}}>
				<Icon as={GiWineBottle} w='20px' color='#9a193c '  />
					<Text fontSize='12px' fontWeight='100'  display='inline-block'>20 n</Text>
				</Box>
			</Flex>
		</>
	 );
}
 
export default Title;