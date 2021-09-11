import { useState, useEffect } from 'react';
import LeftMenu from './LeftMenu';
import {
	Flex,
	Box,
	Image
} from '@chakra-ui/react';

import RightMenu from './RightMenu';
import logo from '../../Img/lupulo.png';


const Header = () => {

	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 720) {
				setIsMobile(true)
		} else {
				setIsMobile(false)
		}
	}
	
	// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize)
	})

	return (  
		<Flex 
			flexFlow='row wrap' 
			justifyContent={{base:'space-around', md: 'space-between'}} 
			textAlign='center' 
			alignSelf='center' 
			pt='30px'>
			<LeftMenu isMobile={isMobile} />
			{isMobile ? 
				<RightMenu /> : 
				<>
					<Image src={logo} w='20%' h='100%' />
					<RightMenu />
				</>
			}
		</Flex>
		
	);
}
 
export default Header;