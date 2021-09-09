import {
	Box, 
	Accordion, 
	AccordionButton, 
	AccordionItem, 
	AccordionPanel,
	Stack,
	Checkbox
} from '@chakra-ui/react';
import {AddIcon, MinusIcon} from '@chakra-ui/icons';

import './LeftBar.css';

const LeftBar = () => {
	return (  
		<Box className='shadowBox'>
			<Accordion defaultIndex={[0]} allowMultiple>
			<AccordionItem>
				{({ isExpanded }) => (
					<>
						<h2>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									title
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
									Item 1
								</Checkbox>
								<Checkbox colorScheme="green" >
									Item 2
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
									title 2
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
									Item 1
								</Checkbox>
								<Checkbox colorScheme="green" >
									Item 2
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
									title 3
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
									Item 1
								</Checkbox>
								<Checkbox colorScheme="green" >
									Item 2
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
									title 4
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
									Item 1
								</Checkbox>
								<Checkbox colorScheme="green" >
									Item 2
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