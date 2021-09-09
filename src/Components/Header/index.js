import { useState, useEffect } from 'react';
import LeftMenu from './LeftMenu';
import {
	Flex,
	Box,
} from '@chakra-ui/react';
import RightMenu from './RightMenu';


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
			justifyContent='space-between' 
			textAlign='center' 
			alignSelf='center' 
			pt='30px'>
			<LeftMenu isMobile={isMobile} />
			{isMobile ? 
				<RightMenu /> : 
				<>
					<Box>
						Logo
					</Box>
					<RightMenu />
				</>
			}
		</Flex>
		
	);
}
 
export default Header;