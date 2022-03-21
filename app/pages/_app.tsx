import { ChakraProvider, CSSReset } from '@chakra-ui/react'


//const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp