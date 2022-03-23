import { Avatar,Button, Switch, Flex, Container, useToast, useColorMode, useColorModeValue, ButtonGroup } from '@chakra-ui/react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

export default function Nav() {
    const toast = useToast()
    const { colorMode, toggleColorMode } = useColorMode()
   
    return(
        <Flex as={'nav'} p={'15px'}  w={'full'} bg={useColorModeValue('#2E2EFF','gray.900')}  justify={'space-between'} position={'fixed'} zIndex={'2'} >
            <Button leftIcon={<Avatar src={'https://avatars.githubusercontent.com/u/83708869?v=4'} />} variant={'outline'} color={useColorModeValue('white','cyan.300')}  _hover={{opacity:'0.5'}} 
            onClick={() => {
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
            <Container textAlign={'center'}>
                <ButtonGroup variant={'outline'}>
                    <Button  color={useColorModeValue('white','cyan.300')} borderColor={useColorModeValue('white','cyan.300')} _hover={{opacity:'0.5'}} textTransform={'uppercase'}>
                        Projects
                    </Button>
                    <Button ml={'4'} color={useColorModeValue('white','cyan.300')} borderColor={useColorModeValue('white','cyan.300')} _hover={{opacity:'0.5'}} textTransform={'uppercase'} >
                        About me
                    </Button>
                </ButtonGroup>
            </Container>
            <Flex mt={'2'}>
                {colorMode === 'light' ?
                <IoMdMoon size={'18px'} color={'white'}/>
                :
                <IoMdSunny size={'18px'} color={'white'}/>
                }
                <Switch size={'md'} onChange={toggleColorMode} ml={'2'} />
            </Flex>
        </Flex>
    )
}