import { axiosConfig } from '../src/utils/axiosConfig'
import { GetStaticProps } from 'next'
import { Box, Button, SimpleGrid, Tag, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Nav from '../src/components/Nav/Nav'
import RepoCard from '../src/components/Cards/RepoCard'
import Footer from '../src/components/Footer/Footer'
import Contact from '../src/components/Contact/Contact'
import AboutMeCard from '../src/components/Cards/AboutMeCard'
import Skills from '../src/components/Skills/Skills'
import useStaticPagination from '../src/hooks/useStaticPagination'
import useResponsive from '../src/hooks/useResponsive'
import NextHead from '../src/components/NextHead/NextHead'


    export const getStaticProps:GetStaticProps = async () => {
        const response = await axiosConfig('PAS19/repos')
        return {
            props:{
                repos:response.data
            },
            revalidate:20
        }
    }


export default function Home({ repos }){
    const { width } = useResponsive()
    const { backPage, Page, nextPage, Start, FinalTv, FinalDesktop, FinalCell } = useStaticPagination(width, 3, 2, 1)
    const Final = () => {
        if(width > 500 && width <= 1300){
            return FinalDesktop
        }
        if(width > 1300){
            return FinalTv
        }
        if(width < 500){
            return FinalCell
        }
    }

    return(
        <Box as={'div'}>
            <NextHead title={'@PAS | HOME'} 
            description={"I work in the area of web and mobile development, acquiring some of my ability to work as a freelancer. Extremely motivated, constantly skills development and professional growth."}
            robots={true} googleBot={true} canonical={false}/>
            <Box as={'header'}>
                <Nav />
            </Box>
            <Box as={'main'}>
                <SimpleGrid columns={{base:1, md:2, xl:3}} spacing={2}>
                    {repos.slice(Start, Final()).map(repo  =>
                        <RepoCard repository={repo} key={repo.id} />
                    )}
                </SimpleGrid>
                <Box display={'flex'} justifyContent={'center'} mt={3}>
                {!(Start < 1) ?
                    <Button onClick={backPage} colorScheme={useColorModeValue('purple','twitter')} borderRadius={'50%'}>
                        <ChevronLeftIcon/>
                    </Button>
                    :
                    <Button disabled colorScheme={useColorModeValue('purple','twitter')}  borderRadius={'50%'}>
                        <ChevronLeftIcon/>
                    </Button>
                    }
                    <Tag ml={2} mr={2} colorScheme={useColorModeValue('purple','twitter')}>
                        {Page}
                    </Tag>
                {!(FinalTv >= repos.length || FinalCell >= repos.length || FinalDesktop >= repos.length) ?
                    <Button onClick={nextPage} colorScheme={useColorModeValue('purple','twitter')}  borderRadius={'50%'}>
                        <ChevronRightIcon/>
                    </Button>
                    :
                    <Button disabled colorScheme={useColorModeValue('purple','twitter')}  borderRadius={'50%'}>
                        <ChevronRightIcon/>
                    </Button>
                    }
                </Box>
                <SimpleGrid columns={{base:1, md:3, xl:3}} spacing={3} mt={'20'}>
                    <Contact />
                    <AboutMeCard />
                    <Skills />
                </SimpleGrid>
            </Box>
            <Box as={'footer'}>
                <Footer/>
            </Box>
        </Box>
    )
}