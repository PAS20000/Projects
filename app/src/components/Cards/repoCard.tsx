import { Box, Container, Flex, Heading, Image, Link, Spinner, Tag, TagLabel, Text, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosRocket, IoMdStar } from 'react-icons/io'
import { BiCodeAlt, BiImage } from 'react-icons/bi'
import { ExternalLinkIcon } from "@chakra-ui/icons";
 
export default function RepoCard({ repository }) {
    const [statusDeploy, setStatusDeploy] = useState('')
    const [stars, setStars] = useState(0)
    const [load, setLoad] = useState(true)
   

    useEffect(() => {
        const data = async () => {
            try {
                const statusDeploy = await axios(`https://api.github.com/repos/PAS19/${repository?.name}/deployments`)
                const urls = statusDeploy.data.map(url => url.statuses_url)
                const verify = await axios(`${urls[0]}`)
                const stars = await axios(`https://api.github.com/repos/PAS19/${repository?.name}/stargazers`)
                setStatusDeploy(verify.data[0].state)
                setStars(stars.data.length)
                setLoad(false)
            } catch (e) {
                data()
            }
        }
        data()
    }, [])


    return(
        <Container as={'article'} boxShadow={'dark-lg'} p='5' mt='20'>
            <Heading as={'h2'} padding='3' fontSize={'2xl'} >
                <Flex flexDir={'column'} align={'center'}>
                    {repository?.name}
                {!load ? 
                <Text >
                    <Tag textTransform={'capitalize'} variant={'outline'} colorScheme={statusDeploy === 'success' ? 'whatsapp':'red'} mt={'1'}>
                        <IoIosRocket />
                        <TagLabel>
                        Deploy {statusDeploy}
                        </TagLabel>
                   </Tag>
                   <Tag textTransform={'capitalize'} variant={'outline'} colorScheme={'yellow'} mt={'1'} ml={'1'}>
                        <IoMdStar />
                        <TagLabel>
                            stars: {stars}
                        </TagLabel>
                   </Tag>
               </Text>
               :
               <Spinner size={'sm'}/>
            }
               </Flex>
            </Heading>
           <Image src={`${repository?.homepage}/img/banner.png`} alt={`banner-${repository?.name}`} />
           <Flex mt={'2'} justify={'center'}>
               <Link href={`${repository?.homepage}`} target='_blank' _hover={{outline:'none', opacity:'0.6'}} _focus={{outline:'none'}}>
                   <Tag colorScheme={'telegram'}>
                       Homepage<ExternalLinkIcon mx={'2px'} />
                   </Tag>
                </Link>
                <Link href={repository?.html_url} target='_blank' ml={'2'}  _hover={{outline:'none', opacity:'0.6'}} _focus={{outline:'none'}}>
                    <Tag colorScheme={'orange'} >
                        Source <BiCodeAlt size='20px' />
                    </Tag>
                </Link>
                <Link href={`${repository?.homepage}/img/banner.png`} target='_blank' ml={'2'}  _hover={{outline:'none', opacity:'0.6'}} _focus={{outline:'none'}}>
                    <Tag colorScheme={'green'} >
                        Picture <BiImage size='20px' />
                    </Tag>
                </Link>
            </Flex>
            <Box mt={'3'} p={'5'}>
                <Text color={useColorModeValue('black','gray.400')} textAlign='center'>
                    {repository?.description}
                </Text>
            </Box>
        </Container>
    )
}