import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box p={'15px'} bg={useColorModeValue('#2E2EFF','gray.900')} textAlign={'center'}>
            <Text ml={'1'} color={'white'}>
                © Pedro Augusto Schroeder/@PAS
            </Text>
        </Box>
    )
}