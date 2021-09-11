import ImgError404 from '../../Img/404.png'

import {
	Text,
	Image
} from '@chakra-ui/react';

const Error404 = () => {
	return (  
		<>
			<Text as='h2' fontSize={{base:'lg', md:'64px'}} textAlign='center' my='25px' >Página no encontrada</Text>
			<Image src={ImgError404} w='100%' h='100%' my='25px' />
		</>
	);
}
 
export default Error404;