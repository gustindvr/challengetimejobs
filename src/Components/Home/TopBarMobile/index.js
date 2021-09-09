
import { Tabs, TabList, TabPanels, Tab, TabPanel, Checkbox } from '@chakra-ui/react';

const TopBarMobile = () => {
	return (  
		<Tabs variant='enclosed' size='md' isFitted>
			<TabList>
				<Tab>Title 1</Tab>
				<Tab>Title 2</Tab>
				<Tab>Title 3</Tab>
				<Tab>Title 4</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<Checkbox colorScheme="red" defaultIsChecked>
						Item 1
					</Checkbox>
					<Checkbox colorScheme="green" >
						Item 2
					</Checkbox>
					<Checkbox colorScheme="green" >
						Item 3
					</Checkbox>
				</TabPanel>
				<TabPanel>
					<Checkbox colorScheme="red" defaultIsChecked>
						Item 1
					</Checkbox>
					<Checkbox colorScheme="green" >
						Item 2
					</Checkbox>
					<Checkbox colorScheme="red" defaultIsChecked>
						Item 3
					</Checkbox>
					<Checkbox colorScheme="green" >
						Item 4
					</Checkbox>
				</TabPanel>
				<TabPanel>
					<p>null 3</p>
				</TabPanel>
				<TabPanel>
					<p>null 4</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
 
export default TopBarMobile;