import { Box, Divider, Heading, useColorModeValue, Link, Text, Container, Square, Grid } from "@chakra-ui/react";



export default function GridCard({ props, Title }) {

    return(
        <Container>
             <Box>
                <Heading textAlign={'center'} color={useColorModeValue('#2E2EFF','cyan.300')}>
                    {Title}
                </Heading>
                <Divider w={'auto'}/>
                <Grid p={'5'}>
                    {props.map((prop, index) =>
                        <Link href={prop.href} isExternal _hover={{outline:'none'}} key={index} mt={'2'}>
                            <Box borderRadius={'5'} p={'2'} boxShadow={'dark-lg'}  _hover={{transition:'0.5s', borderRadius:'20'}} 
                            bg={useColorModeValue(`${prop.bgLight}`,`${prop.bgDark}`)}>
                                <Square p={'2'} color={'white'}>
                                    {prop.icon}
                                    <Text textAlign={'center'} ml={'1'}>
                                       {prop.text}
                                    </Text>
                                </Square>
                            </Box>
                        </Link>
                    )}
                </Grid>
            </Box>
        </Container>
    )
}