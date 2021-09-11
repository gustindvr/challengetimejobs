import {
	Box, 
	Accordion, 
	AccordionButton, 
	AccordionItem, 
	AccordionPanel,
	Stack,
	Checkbox,
	Slider,
	SliderFilledTrack,
	SliderTrack,
	SliderThumb,
	Text
} from '@chakra-ui/react';
import {AddIcon, MinusIcon} from '@chakra-ui/icons';
import {GiBeerBottle} from 'react-icons/gi';

import './LeftBar.css';

const LeftBar = () => {
	return (  
		<Box className='shadowBox'>
			<Box  textAlign='center'py='20px'>
				<Text fontSize='14px' fontWeight='bold' textAlign='left' ml={{base:'0', md:'20px'}} my='5px'>Price Range</Text>
				<Slider aria-label="slider-ex-4" w='80%' min={100} max={2000} defaultValue={30}>
					<SliderTrack bg="red.100">
						<SliderFilledTrack bg="#95072e" />
					</SliderTrack>
					<SliderThumb boxSize={6}>
						<Box color="#95072e" as={GiBeerBottle} />
					</SliderThumb>
				</Slider>
			</Box>
			<Accordion defaultIndex={[0]} allowMultiple>
			<AccordionItem>
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									Filter
								</Box>
								{isExpanded ? (
									<MinusIcon fontSize="12px" />
								) : (
									<AddIcon fontSize="12px" />
								)}
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<Stack spacing={5} direction="column">
								<Checkbox colorScheme="red" defaultIsChecked>
									Filter 1
								</Checkbox>
								<Checkbox colorScheme="green" >
									Filter 2
								</Checkbox>
								<Checkbox colorScheme="red" defaultIsChecked>
									Filter 3
								</Checkbox>
								<Checkbox colorScheme="green" >
									Filter 4
								</Checkbox>
							</Stack>
						</AccordionPanel>
					</>
				)}
			</AccordionItem>
			<AccordionItem>
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									Filter 2
								</Box>
								{isExpanded ? (
									<MinusIcon fontSize="12px" />
								) : (
									<AddIcon fontSize="12px" />
								)}
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<Stack spacing={5} direction="column">
								<Checkbox colorScheme="red" defaultIsChecked>
									Filter 1
								</Checkbox>
								<Checkbox colorScheme="green" >
									Filter 2
								</Checkbox>
							</Stack>
						</AccordionPanel>
					</>
				)}
			</AccordionItem>
			<AccordionItem>
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									Filter 3
								</Box>
								{isExpanded ? (
									<MinusIcon fontSize="12px" />
								) : (
									<AddIcon fontSize="12px" />
								)}
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<Stack spacing={5} direction="column">
								<Checkbox colorScheme="red" defaultIsChecked>
									Filter 1
								</Checkbox>
							</Stack>
						</AccordionPanel>
					</>
				)}
			</AccordionItem>
			<AccordionItem>
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									Filter 4
								</Box>
								{isExpanded ? (
									<MinusIcon fontSize="12px" />
								) : (
									<AddIcon fontSize="12px" />
								)}
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<Stack spacing={5} direction="column">
								<Checkbox colorScheme="red" defaultIsChecked>
									Filter 1
								</Checkbox>
								<Checkbox colorScheme="green" >
									Filter 2
								</Checkbox>
							</Stack>
						</AccordionPanel>
					</>
				)}
			</AccordionItem>
			</Accordion>


		</Box>
	);
}
 
export default LeftBar;