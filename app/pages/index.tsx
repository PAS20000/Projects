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


interface Repos {
    id: Number
    node_id: String
    name: String
    full_name: String
    private: Boolean
    owner: {
      login: String
      id: Number
      node_id: String
      avatar_url: String
      gravatar_id: String
      url: String
      html_url: String
      followers_url: String
      following_url: String
      gists_url: String
      starred_url: String
      subscriptions_url: String
      organizations_url: String
      repos_url: String
      events_url: String
      received_events_url: String
      type: String
      site_admin: Boolean
    }
    html_url: String
    description: String
    fork: Boolean
    url: String
    forks_url: String
    keys_url: String
    collaborators_url: String
    teams_url: String
    hooks_url:String
    issue_events_url: String
    events_url: String
    assignees_url:String
    branches_url: String
    tags_url: String
    blobs_url: String
    git_tags_url: String
    git_refs_url: String
    trees_url: String
    statuses_url: String
    languages_url: String
    stargazers_url: String
    contributors_url: String
    subscribers_url: String
    subscription_url: String
    commits_url: String
    git_commits_url: String
    comments_url: String
    issue_comment_url: String
    contents_url: String
    compare_url: String
    merges_url: String
    archive_url: String
    downloads_url:String
    issues_url: String
    pulls_url: String
    milestones_url:String
    notifications_url:String
    labels_url: String
    releases_url: String
    deployments_url: String
    created_at: String
    updated_at:String
    pushed_at:String
    git_url: String
    ssh_url: String
    clone_url:String
    svn_url: String
    homepage: String
    size: Number
    stargazers_count: Number
    watchers_count: Number
    language: String
    has_issues: Boolean
    has_projects: Boolean
    has_downloads: Boolean
    has_wiki: Boolean
    has_pages: Boolean
    forks_count: Number
    mirror_url: String
    archived: Boolean
    disabled: Boolean
    open_issues_count: Number
    license: String
    allow_forking: Boolean
    is_template: Boolean
    topics: String
    visibility: String
    forks: Number
    open_issues: Number
    watchers: Number
    default_branch: String
}


    export const getStaticProps:GetStaticProps = async () => {
        const response = await axiosConfig('PAS19/repos')
        return {
            props:{
                repos:response.data
            },
            revalidate:60 * 60 * 12 //12h
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
            robots={true} googleBot={true} canonical={true}/>
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