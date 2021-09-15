import {
	Flex,
	Text,
	Icon,
	Box,
} from '@chakra-ui/react';

import {SiTelegram} from 'react-icons/si';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';
import {BsClockFill} from 'react-icons/bs';

const Info = () => {
	return (  
		<Flex 
		flexFlow='row wrap' 
		w='90%' 
		justifyContent={{base: 'center', md:'space-between' }}
		alignContent='center'
		textAlign={{base: 'center', md:'left'}}
		my='50px'
	>
			<Box w='100%'>
				<Icon mb='10px' as={SiTelegram} color='#9a193c'  />
				<Text fontSize='16px'>Calle Falsa <Box fontWeight='bold' display='inline-block'>123,</Box> Ciudad, CCPP</Text>
			</Box>
			<Box w='100%' mt='20px'>
				<Icon mb='10px' as={FaPhoneAlt} color='#9a193c'  />
				<Text fontSize='16px' fontWeight='bold' > (011) 137-77-45 </Text>
			</Box>
			<Box w='100%' my='20px'>
				<Icon mb='10px' as={BsClockFill} color='#9a193c'  />
				<Text fontSize='16px' fontWeight='bold'>10:00 -- 20:00</Text>
			</Box>
			<Box w='100%'>
				<Icon mb='10px' as={MdMail} color='#9a193c'  />
				<Text fontSize='16px'>info@ventadistribution.ar</Text>
				<Text fontSize='16px'>order@ventadistribution.ar</Text>
			</Box>	
	</Flex>
	);
}
 
export default Info;