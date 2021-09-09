import {useState, useEffect} from 'react';

import Title from "../Components/Common/Title";
import LeftBar from "../Components/Home/LeftBar";
import ContentCards from '../Components/Home/ContentCards';
import TopBarMobile from "../Components/Home/TopBarMobile";

import { Flex, Box } from "@chakra-ui/react";

const Home = () => {

	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 725) {
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
		<>
			<Title first='primer' second='palabra' title='Acá va el titulo'  />
			<Flex flexFlow='row wrap' justifyContent='space-around' my='50px'>
					{isMobile ? 
						<Box w='100%'>
							<TopBarMobile />  
						</Box> :
						<Box w='20%' ml='30px'>
							<LeftBar />
						</Box>
					}
				<Box w='70%'>
					<ContentCards />
				</Box>
			</Flex>
		</>
	);
}
 
export default Home;