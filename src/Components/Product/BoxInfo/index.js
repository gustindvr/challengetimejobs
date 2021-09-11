import {
	Container,
	Flex, 
	Box
} from '@chakra-ui/react';
import BoxAddCart from './BoxAddCart';
import Description from './Description';
import Title from './Title';

const BoxInfo = ({id, name, tagline, description, attenuation_level}) => {
	return (  
		<Container maxW='container.sm'>
			<Flex
				flexFlow='row wrap'
				textAlign={{base: 'center', md: 'start'}}
				justifyContent={{base: 'center', md: 'start'}}
				w={{base:'100%', md:'70%'}}
				ml={{base: '0', md:'10%'}}
			>
				<Title 
					variant='rnabhar' 
					category='katanor tobapob' 
					name={name} 
					grape='kpachoe monycrañkoe'
				/>
				<Description tagline={tagline} description={description} attenuation_level={attenuation_level} />
				<BoxAddCart id={id}/>
			</Flex>
			<Box></Box>
		</Container>
	);
}
 
export default BoxInfo;