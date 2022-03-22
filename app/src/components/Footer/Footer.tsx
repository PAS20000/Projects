import { Box, Button, Container, Flex, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box p={'15px'}  w={'full'} bg={useColorModeValue('gray.300','gray.900')}>
            <Container>
                    <HStack>
                        <Text ml={'1'}>
                        © Pedro Augusto Schroeder/@PAS
                        </Text>
                        <Link href='/test' isExternal>
                            <Button colorScheme='twitter' borderRadius={'50%'} variant={'outline'} size='xs'>
                                <FaLinkedin />
                            </Button>
                        </Link>
                        <Link href='/test' isExternal>
                            <Button colorScheme='twitter' borderRadius={'50%'}variant={'outline'} size='xs'>
                                <FaDiscord />
                            </Button>
                        </Link>
                        <Link href='/test' isExternal>
                            <Button colorScheme='twitter' borderRadius={'50%'}variant={'outline'} size='xs'>
                                <FaGithub />
                            </Button>
                        </Link>
                        <Link href='/test' isExternal>
                            <Button colorScheme='twitter' borderRadius={'50%'}variant={'outline'} size='xs'>
                                <FaInstagram />
                            </Button>
                        </Link>
                    </HStack>
            </Container>
        </Box>
    )
}