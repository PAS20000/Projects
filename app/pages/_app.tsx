import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import '../src/animation/Show.styles.css'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp