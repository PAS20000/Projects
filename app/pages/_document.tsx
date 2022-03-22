import { Box } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <Box as={'body'} sx={{
          '&::-webkit-scrollbar': {
            width: '0px',
            borderRadius: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            bg:'#2D3748',
          },
        }}>
          <Main />
          <NextScript />
        </Box>
      </Html>
    )
  }
}