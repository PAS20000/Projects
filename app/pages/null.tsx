import { Box, Heading, Text, Button, Link, useColorModeValue, Tag, TagLabel } from '@chakra-ui/react';
import { IoIosRocket } from 'react-icons/io';
import NextHead from '../src/components/NextHead/NextHead';

export default function Null() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <NextHead title={'Deploy Pending'} description={'...'} robots={false} googleBot={false} canonical={false}/>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bg={useColorModeValue('red','red.300')}
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Homepage Not Found
        <Tag textTransform={'capitalize'} variant={'outline'} colorScheme={'red'} ml={'1'}>
            <IoIosRocket />
            <TagLabel>
                Deploy: Pending
            </TagLabel>
        </Tag>
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
        <Link href={'/'} _hover={{outline:'none'}}>
        <Button
            boxShadow={'dark-lg'}
            colorScheme={'blackAlpha'}
            color="white"
            variant="solid">
            Go to Home
        </Button>
        </Link>
    </Box>
  );
}