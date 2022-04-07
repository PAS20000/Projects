import { Avatar,Button, Switch, Flex, Container, useToast, useColorMode, useColorModeValue, ButtonGroup, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import useResponsive from '../../hooks/useResponsive'

export default function Nav() {
    const toast = useToast()
    const { colorMode, toggleColorMode } = useColorMode()
    const { width, height } = useResponsive()

    const projectScroll = () => {
        window.scrollTo(0,0)
    }
    const AboutMeScroll = () => {
        window.scroll(0, height * 1.4)
    }

    useEffect(() => {
        console.info('This site uses window.innerWidth and window.innerHeight for responsiveness of some functionality, please refresh the page if in inspect element.')
    }, [])

    return(
        <Flex as={'nav'} p={'15px'}  w={'full'} bg={useColorModeValue('#2E2EFF','gray.900')}  justify={'space-between'} position={'fixed'} zIndex={'2'} >
            <Button variant={'outline'} color={useColorModeValue('white','cyan.300')}  _hover={{opacity:'0.5'}}
            onClick={() => {
                    toast({
                        title:'@PS20000 it says: ',
                        description:'Hellow, i am a full stack developer',
                        status:'info',
                        isClosable:true,
                        duration:8000
                    }),  new Audio('/audio/dc-notific.mp3').play()
                }
            }>
                <Avatar src={'https://avatars.githubusercontent.com/u/83708869?v=4'} />
                {width > 500 && 
                <Text ml={'1'} fontSize={{base:'12px', md:'16px'}}>
                    @PS20000
                </Text>}
            </Button>
            <Container textAlign={'center'}>
                <ButtonGroup variant={'outline'}>
                    <Button  color={useColorModeValue('white','cyan.300')} borderColor={useColorModeValue('white','cyan.300')} 
                    _hover={{opacity:'0.5'}} textTransform={'uppercase'} fontSize={{base:'12px', md:'16px'}} onClick={projectScroll}>
                        Projects
                    </Button>
                    <Button ml={'4'} color={useColorModeValue('white','cyan.300')} borderColor={useColorModeValue('white','cyan.300')} 
                    _hover={{opacity:'0.5'}} textTransform={'uppercase'} fontSize={{base:'12px', md:'16px'}} onClick={AboutMeScroll}>
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