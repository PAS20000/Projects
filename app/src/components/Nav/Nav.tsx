import { Avatar,Button, Switch, Flex, Container, Box, useBoolean, useToast, useColorMode, color, useColorModeValue } from '@chakra-ui/react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

export default function Nav() {
    const toast = useToast()
    const { colorMode, toggleColorMode } = useColorMode()
   
    return(
        <Flex as={'nav'} p={'15px'}  w={'full'} bg={useColorModeValue('gray.200','gray.900')} justify={'space-between'} position={'fixed'} zIndex={'2'} >
            <Button id='testSong' leftIcon={<Avatar src={'https://avatars.githubusercontent.com/u/83708869?v=4'} />} variant={'ghost'}colorScheme={'twitter'} onClick={() => {
                    toast({
                        title:'@PAS it says: ',
                        description:'Hellow, i am a full stack developer',
                        status:'info',
                        isClosable:true,
                        duration:8000
                    }),  new Audio('/audio/dc-notific.mp3').play()
                }
            }>
                @PAS
            </Button>
            <Container>
                <Button variant={'outline'} colorScheme={useColorModeValue('messenger','twitter')} textTransform={'uppercase'}>
                    Projects
                </Button>
                <Button ml={'4'} variant={'outline'} colorScheme={useColorModeValue('messenger','twitter')} textTransform={'uppercase'} >
                    About me
                </Button>
                <Button ml={'4' } variant={'outline'} colorScheme={useColorModeValue('messenger','twitter')} textTransform={'uppercase'}>
                    Contact
                </Button>
                <Button ml={'4'} variant={'outline'} colorScheme={useColorModeValue('messenger','twitter')} textTransform={'uppercase'}>
                    Skills
                </Button>
            </Container>
            <Flex mt={'2'}>
                {colorMode === 'light' ?
                <IoMdSunny size={'18px'} color={'white'}/>
                :
                <IoMdMoon size={'18px'}/>
                }
                <Switch size={'md'} onChange={toggleColorMode} ml={'2'} />
            </Flex>
        </Flex>
    )
}