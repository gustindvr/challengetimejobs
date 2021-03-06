import {useHistory} from 'react-router-dom';
import {
	Flex,
	Text,
	Image,
	Button,
	Icon,
	Box,
} from '@chakra-ui/react';

import logo from '../../../Img/lupulo.png';
import {SiTelegram} from 'react-icons/si';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';

const TopFooter = () => {

	const history = useHistory();

	const goToAboutUs = () => {
		history.push('/find-us')
	}

	return (  
		<Flex 
			flexFlow='row wrap' 
			justifyContent={{base: 'center', md:'space-between' }}
			w='100%' 
			alignContent='center'
		>
				<Image src={logo} w={{base: '100%', md: '20%'}} h='100%' mb={{base: '20px', md: '0'}} />
				<Flex 
					flexFlow='row wrap' 
					w={{base:'100%' ,md:'40%'}} 
					justifyContent={{base: 'center', md:'space-between' }}
					alignContent='center'
					textAlign={{base: 'center', md:'left'}}
				>
						<Box w={{base:'100%', md: '30%'}}>
							<Icon as={SiTelegram} color='#9a193c' w='20%' />
							<Text fontSize={{base: '18px', md:'14px' }}>Calle Falsa<Box fontWeight='bold' display='inline-block'> 123,</Box> Ciudad, CCPP</Text>
						</Box>
						<Box w={{base:'100%', md: '30%'}} my={{base:'20px', md:'0'}}>
							<Icon as={FaPhoneAlt} color='#9a193c' w='20%' />
							<Text fontSize={{base: '18px', md:'14px' }}>+54 (011) <Box fontWeight='bold'  display='inline-block'>137-77-45</Box>10:00 - 20:00</Text>
						</Box>
						<Box w={{base:'100%', md: '35%'}}>
							<Icon as={MdMail} color='#9a193c' w='20%' />
							<Text fontSize='14px'>info@ventadistribution.ar</Text>
							<Text fontSize='14px'>order@ventadistribution.ar</Text>
						</Box>	
				</Flex>
				<Flex 
					flexFlow='row wrap' 
					justifyContent='center' 
					w={{base:'100%', md: '20%' }}
					alignContent='center'
					textAlign='center'
					my={{base: '40px', md: '0'}}
				>
					<Button 
						w='100%' 
						m='0' 
						bg='#9a193c' 
						_hover={{bg: ' #95072e'}}
						color='white'
						onClick={goToAboutUs}
					>
						Go to Find Us
					</Button>
					<Text fontSize='10px' top={0} m='0'>contact means</Text>
				</Flex>

		</Flex>
	);
}
 
export default TopFooter;