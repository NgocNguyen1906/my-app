import { VStack, Button, Box, Text, Link, FormControl, FormLabel, Input, Heading, Textarea, CheckboxGroup, Stack, Checkbox, Flex, useColorModeValue} from "@chakra-ui/react";
import { FaUserCog, FaDatabase, FaBell, FaUser } from "react-icons/fa";
import { AdminHeader } from "./AdminHome";

function Sidebar() {
    return (
        <Box w="350px" bg="#2d4b12" color="white" p={5} alignItems="center" justifyContent="center">
                
                    <VStack align="stretch" spacing={16} mt={20} alignItems="center" justifyContent="center">
                        <Link href='/Members'>
                            <Button variant="outline" color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} w='300px' leftIcon={<FaUserCog  />}>Manage accounts</Button>
                        </Link>
                        <Link>
                            <Button variant="outline" w='300px' color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} leftIcon={<FaDatabase  />}>System Data</Button>
                        </Link>
                        <Link href='/SendNotif'>
                            <Button bg="whitesmoke" w='300px' leftIcon={<FaBell  />}>Send Notifications</Button>
                        </Link>
                        <Link>
                            <Button variant="outline" w='300px' color="whitesmoke" _hover={{ color:'#2d4b12', bg: '#fff'}} leftIcon={<FaUser  />}>My Account</Button>
                        </Link>
                    </VStack>
                {/* Footer */}
                <Text position="absolute" bottom={5} left={5} fontSize="sm">Copyright Website 2024</Text>
        </Box>
    )
}

function SendNotif() {
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        // Logic to handle form submission
      };
    const boxShadowColor = useColorModeValue('0px 2px 12px rgba(130,148,116,0.8)', '0px 2px 12px rgba(130,148,116,0.8)');
      return (
      <>
      <AdminHeader/>
      <Flex h="100vh" overflowY="hidden">
        <Sidebar/>
        <Box flex="1" p={6} display="flex" flexDirection="column"  bgGradient="linear(to-t, #e1f5dd, white)">
            <Heading as="h3" size="lg" mb={10} textColor="#83AD5F">Send notifications</Heading>
            <Box p={6} w="full" alignItems="center" justifyContent="center">
                <VStack spacing={6}  p={6} boxShadow={boxShadowColor} borderRadius="lg" bg="white">
                    <form onSubmit={handleFormSubmit} style={{ width: '100%', marginTop: '5'}}>
                    <FormControl id="title" isRequired>
                        <FormLabel>Title </FormLabel>
                        <Input type="text" boxShadow={`0px 0px 10px rgba(130, 148, 116, 0.4)`} placeholder="(20 words max)"/>
                    </FormControl>
                        <FormControl id="description" mt={4} isRequired>
                            <FormLabel>Description </FormLabel>
                            <Textarea boxShadow={`0px 0px 10px rgba(130, 148, 116, 0.4)`} placeholder="(100 words max)"/>
                        </FormControl>
                        <FormControl id="faculty" mt={4}>
                            <FormLabel>Faculty</FormLabel>
                            <CheckboxGroup colorScheme="green">
                            <Stack direction="row">
                                <Checkbox value="facultyA">Faculty A</Checkbox>
                                <Checkbox value="facultyB">Faculty B</Checkbox>
                                <Checkbox value="facultyC">Faculty C</Checkbox>
                            </Stack>
                            </CheckboxGroup>
                        </FormControl>
                        <FormControl id="recipient" mt={4}>
                            <FormLabel>Recipient</FormLabel>
                            <CheckboxGroup colorScheme="green">
                            <Stack direction="row">
                                <Checkbox value="students">Students</Checkbox>
                                <Checkbox value="marketingManager">Marketing Manager</Checkbox>
                                <Checkbox value="marketingCoordinator">Marketing Coordinator</Checkbox>
                                <Checkbox value="administrator">Administrator</Checkbox>
                                <Checkbox value="guest">Guest</Checkbox>
                            </Stack>
                            </CheckboxGroup>
                        </FormControl>
                        <Button type="submit" bg="#2d4b12" color='#fff' variant="outline" colorScheme='green' mt={8} _hover={{ bg:"#fff", color:'#2d4b12'}} _focus={{ boxShadow: "none" }}>
                            Send
                        </Button>
                        </form>
                    </VStack>
            </Box>
        </Box>
      </Flex>
        
        </>
      );
}

export default SendNotif;
