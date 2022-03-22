import { Button, Container, Divider, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return(
    <Container>
        <HStack display={'grid'}>
            <Heading textAlign={'center'}>
                Contact
            </Heading>
            <Divider/>
            <Flex justify={'space-around'} p={'5'}>
                <Link href='/test' isExternal>
                    <Button colorScheme={'linkedin'} borderRadius={'50%'} size={'md'}>
                        <FaLinkedin />
                    </Button>
                </Link>
                <Link href='/test' isExternal>
                    <Button colorScheme={'telegram'} borderRadius={'50%'} size={'md'}>
                        <FaDiscord />
                    </Button>
                </Link>
                <Link href='/test' isExternal>
                    <Button colorScheme={'purple'} borderRadius={'50%'} size={'md'}>
                        <FaGithub />
                    </Button>
                </Link>
                <Link href='/test' isExternal>
                    <Button colorScheme={'orange'} borderRadius={'50%'} size={'md'}>
                        <FaInstagram />
                    </Button>
                </Link>
            </Flex>
        </HStack>
    </Container>
    )
}   