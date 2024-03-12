import {
  Avatar,
  Box, Button, Divider, Flex, Heading, Icon, Link, Select, SimpleGrid, Spacer, Stat, StatLabel, StatNumber, VStack, Image, IconButton, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { Footer, Quote, DiscussionPage } from './Homepage.page' 
import { FaUser, FaNewspaper, FaBell, FaCalendarDay, FaCog, FaDatabase, FaEnvelopeOpenText } from 'react-icons/fa';

export function AdminHeader() {
  const notifications = [
    { id: 1, message: 'New user registered' },
    { id: 2, message: 'System update available' },
    { id: 3, message: 'New contact message received' },
    // ... more notifications
  ];

  return (
    <Flex as="header" align="center" padding="1rem" bg="transparent" boxShadow="sm" width="100%">
      <Link href='/'>
        <Box p="2">
          <Image src="path-to-your-logo.svg" alt="Website logo" boxSize="70px" ml="4" />
        </Box>
      </Link>

      <Spacer /> {/* This pushes all elements to the right and left sides of the header */}

      <Flex alignItems="center" ml="auto" mr="auto">
        <Box display="flex" alignItems="center">
          {/* This container will group the navigation links, language selector, and avatar */}
          <Link href="/" px="3" py="1" rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.100' }} mr={20}>
            Home
          </Link>
          
          <Link href="#" px="3" py="1" rounded="md" _hover={{ textDecoration: 'none', bg: 'gray.100' }} mr={20}>
            Newsfeed
          </Link>

          <Select placeholder="Language" width="auto" mr="20">
            <option value="en">English</option>
            <option value="es">Español</option>
            {/* More languages */}
          </Select>

          {/* Notification bell and dropdown list */}
          <Menu>
            <MenuButton as={IconButton} icon={<FaBell />} variant="ghost" position="relative" mr="4" width={10}>
              {/* If you have a notification count you want to display, you can add a Badge component here */}
            </MenuButton>

            <MenuList>
              {notifications.map(notification => (
                <MenuItem key={notification.id}>{notification.message}</MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* Avatar for admin account */}
          <Avatar name="Admin Account" src="path-to-admin-avatar.jpg" size="md" />
        </Box>
      </Flex>
    </Flex>
  );
}

const Overview = () => {
  return (
    <Box bg="#d9e6d3" p={6} borderRadius="lg" boxShadow="xl">
      <Heading as="h3" size="lg" textAlign="center" mb={6} color="#1d4732">
        Statistics overview
      </Heading>
      <Divider mb={6} />
      <SimpleGrid columns={2} spacing={10}>
        {/* Statistics column */}
        <VStack spacing={4} align="stretch">
          <Stat>
            <StatLabel><Icon as={FaUser} mr={2} />Total accounts</StatLabel>
            <Link href='/Members'>
              <StatNumber textDecoration='underline'>1,024</StatNumber>
            </Link>
            
          </Stat>
          <Stat>
            <StatLabel><Icon as={FaNewspaper} mr={2} />Total articles</StatLabel>
            <StatNumber>1,024</StatNumber>
          </Stat>
          <Stat>
            <StatLabel><Icon as={FaBell} mr={2} />Days until the end of the academic year</StatLabel>
            <StatNumber>1,024</StatNumber>
          </Stat>
          <Stat>
            <StatLabel><Icon as={FaCalendarDay} mr={2} />Term end date</StatLabel>
            <StatNumber>May 4th, 2024</StatNumber>
          </Stat>
        </VStack>

        {/* Buttons column */}
        <VStack spacing={4} align="stretch">
          <Link href='Members'> 
            <Button leftIcon={<FaCog />} colorScheme="teal" variant="solid">
              Manage accounts
            </Button>
          </Link>
          
          <Button leftIcon={<FaDatabase />} colorScheme="teal" variant="solid">
            System data
          </Button>
          <Link href='SendNotif'>
            <Button leftIcon={<FaEnvelopeOpenText />} colorScheme="teal" variant="solid">
              Send notifications
            </Button>
          </Link>
          
          <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
            My account
          </Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

function Homepage() {
  return (
    <Box>
      <AdminHeader></AdminHeader>
      <Quote></Quote>
      <Overview></Overview>
      <DiscussionPage></DiscussionPage>
      <Footer></Footer>
    </Box>

  );
}

export default Homepage