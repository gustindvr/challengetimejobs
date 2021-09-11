import Title from "../Components/Common/Title";
import LeftBar from "../Components/Home/LeftBar";
import ContentCards from '../Components/Home/ContentCards';

import { Flex, Box } from "@chakra-ui/react";

const Home = () => {

	return (  
		<>
			<Title first='primer' second='palabra' title='Acá va el titulo'  />
			<Flex flexFlow='row wrap' justifyContent='space-around' my='50px'>
				<Box w={{base:'80%', md: '20%'}} ml='30px'>
					<LeftBar /> 
				</Box>
				<Box w={{base:'100%', md: '70%'}}>
					<ContentCards />
				</Box>
			</Flex>
		</>
	);
}
 
export default Home;