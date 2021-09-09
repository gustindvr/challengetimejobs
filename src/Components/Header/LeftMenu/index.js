import {Link} from 'react-router-dom';

import { 
	Box, 
	Menu, 
	MenuItem, 
	MenuList, 
	MenuButton, 
	IconButton, 
} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';

const LeftMenu = ({isMobile}) => {

	return (  

		<Box
			display='flex' 
			flexFlow='row wrap'
			justifyContent='space-around'
			mx={{base: 'auto', md: '0'}}
			alignItems='center'
			w='40%'
		>
			{
				isMobile ? 
					<Menu isLazy>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<HamburgerIcon />}
							variant="outline"
							mx='auto'
						/>
						<MenuList>
							<MenuItem>
								<Link to='!#'>Link largo</Link>
							</MenuItem>
							<MenuItem>
								<Link to='/'>Home</Link>
							</MenuItem>
							<MenuItem>
								<Link to='!#' >VK</Link>
							</MenuItem>
							<MenuItem >
								<Link to='!#'>Facebook</Link>
							</MenuItem>
						</MenuList>
					</Menu> :
					<>
						<Link to='!#'>Link largo</Link>
						<Link to='/'>Home</Link>
						<Link to='!#' >VK</Link>
						<Link to='!#'>Facebook</Link>
					</>
			}
		</Box>
	);
}
 
export default LeftMenu;