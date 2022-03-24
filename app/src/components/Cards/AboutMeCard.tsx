import { 
    Avatar, Button, Container, Divider, Flex, Grid, Heading, Link, Modal, 
    ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, 
    ModalOverlay, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";

export default function AboutMeCard() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Container mb={'15'}  p={'5'} boxShadow={'dark-lg'}>
             <Heading textAlign={'center'} mb={'3'} display={'flex'} justifyContent={'center'} alignItems={'center'} color={useColorModeValue('#2E2EFF','cyan.300')}>
                <Avatar src="https://avatars.githubusercontent.com/u/83708869?v=4" size={'xl'} mt={'5'} />
                <Text ml={'3'} mt={'3'} >
                    About me
                </Text>
            </Heading>
             <Divider />
            <Flex>
                <Grid>
                    <Text m={'5'}>
                        I work in the area of web and mobile development, acquiring some of my
                        ability to work as a freelancer. Extremely motivated, constantly
                        skills development and professional growth.
                    </Text>
                    <Button variant={'outline'} colorScheme={useColorModeValue('purple','twitter')} textTransform={'uppercase'} onClick={onOpen} id='aboutMe'>
                        Download CV
                    </Button>
                    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader color={useColorModeValue('#2E2EFF','cyan.300')}>
                        CV language
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign={'center'}>
                    <Link href={'/pdf/CVPASEN.pdf'} isExternal _hover={{outline:'none'}}>
                        <Button variant={'outline'} colorScheme={useColorModeValue('purple','twitter')} textTransform={'uppercase'} leftIcon={<FaFilePdf/>}>
                            English
                        </Button>
                    </Link>
                    <Link href={'/pdf/CVPAS.pdf'} isExternal _hover={{outline:'none'}} ml={'2'}>
                        <Button variant={'outline'} colorScheme={useColorModeValue('purple','twitter')} textTransform={'uppercase'} leftIcon={<FaFilePdf/>}>
                            Portuguese
                        </Button>
                    </Link>
                    </ModalBody>
                    <ModalFooter />
                    </ModalContent>
                </Modal>
                </Grid>
            </Flex>
        </Container>
    )
}