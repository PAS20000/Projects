import { GetStaticProps } from 'next'
import { Box, Button, SimpleGrid, Tag, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Nav from '../src/components/Nav/Nav'
import Footer from '../src/components/Footer/Footer'
import Contact from '../src/components/Contact/Contact'
import AboutMeCard from '../src/components/Cards/AboutMeCard'
import Skills from '../src/components/Skills/Skills'
import NextHead from '../src/components/NextHead/NextHead'
import RepoCard from '../src/components/Cards/RepoCard'
import { axiosConfig } from '../src/utils/axiosConfig'
import useEasyPagination from '../src/hooks/useEasyPagination/useEasyPagination'



type Repos = {
    repos: [{
        allow_forking: boolean
        archive_url: string
        archived: boolean
        assignees_url: string
        blobs_url: string
        branches_url: string
        clone_url: string
        collaborators_url: string
        comments_url: string
        commits_url: string
        compare_url: string
        contents_url: string
        contributors_url: string
        created_at: string
        default_branch:string
        deployments_url: string
        description: string | null
        disabled: boolean
        downloads_url: string
        events_url: string
        fork: boolean
        forks: number
        forks_count: number
        forks_url: string
        full_name: string
        git_commits_url: string
        git_refs_url: string
        git_tags_url: string
        git_url: string
        has_downloads: boolean
        has_issues: boolean
        has_pages: boolean
        has_projects: boolean
        has_wiki: boolean
        homepage: string | null
        hooks_url: string
        html_url: string
        id: number
        is_template: boolean
        issue_comment_url:string
        issue_events_url: string
        issues_url: string
        keys_url: string
        labels_url: string
        language: string
        languages_url:string
        license: null
        merges_url: string
        milestones_url: string
        mirror_url: string | null
        name: string
        node_id: string
        notifications_url:string
        open_issues: number
        open_issues_count: number
        owner: {
            login: string 
            id: number
            node_id: string 
            avatar_url: string 
            gravatar_id: string | null
        }
        private: boolean
        pulls_url:string
        pushed_at: string
        releases_url: string
        size: number
        ssh_url: string
        stargazers_count: number
        stargazers_url: string
        statuses_url: string
        subscribers_url: string
        subscription_url: string
        svn_url: string
        tags_url: string
        teams_url:string
        topics: []
        trees_url: string
        updated_at:string
        url:string
        visibility:string
        watchers: number
        watchers_count: number
    }]
    
}


    export const getStaticProps:GetStaticProps = async () => {
        const response = await axiosConfig('users/PS200000/repos')
        return {
            props:{
                repos:response.data
            },
            revalidate:20
        }
    }


export default function Home({ repos }: Repos) {
   
    const {DeviceData, NextPage, ReturnPage, ExactPage, Pages, currentPage} = useEasyPagination({
        data:repos,
        ShowItemsOnDesktop:3,
        ShowItemsOnMobile:1,
        ShowItemsOnTv:3,
        CountPages:true,

    })
    
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
                    {DeviceData.map( (repo) =>
                        <RepoCard repository={repo} key={repo.id} />
                    )}
                </SimpleGrid>
                <Box display={'flex'} justifyContent={'center'} mt={3}>
                    <Button onClick={ReturnPage} colorScheme={useColorModeValue('purple','twitter')} borderRadius={'50%'}>
                        <ChevronLeftIcon/>
                    </Button>
                    {Pages.map((pg, index) => 
                    <Button key={index} colorScheme={currentPage === pg ? useColorModeValue('purple','twitter'):'gray'} onClick={() => ExactPage(pg)} ml={2} mr={2}>
                        {pg}
                    </Button>)
                    }
                    <Button onClick={NextPage} colorScheme={useColorModeValue('purple','twitter')}  borderRadius={'50%'}>
                        <ChevronRightIcon/>
                    </Button>
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