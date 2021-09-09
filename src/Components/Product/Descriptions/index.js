import{
	Flex,
	Text,
	Box,
} from '@chakra-ui/react';
import BlockTitleAndDesc from './BlockTitleAndDesc';

const Descriptions = () => {
	return (  
		<Flex
			flexFlow='row wrap'
			w='100%'

		>
			<Box 			
				w={{base: '100%', md: '60%'}}
				p='20px'
				textAlign='justify'
			>
				<BlockTitleAndDesc 
					title='Accio Filler Text!'
					description='Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.'
				/>
				<BlockTitleAndDesc 
					title='Accio Filler Text!'
					description='Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. '
				/>
				<BlockTitleAndDesc 
					title='Accio Filler Text!'
					description='Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.'
				/>				
				<BlockTitleAndDesc 
				title='Accio Filler text!'
				description='Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. '
				/>
				<BlockTitleAndDesc 
				title='Accio Filler text!'
				description='Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. '
				/>
			</Box>
			<Box 
				w={{base: '100%', md: '30%'}}
				p='20px'
				textAlign='justify'
			>
				<Text color='gray.200'>
					Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.
				</Text>
			</Box>
		</Flex>
	);
}
 
export default Descriptions;