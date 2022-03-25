import { Box, Container, Flex, Heading, Image, Link, Spinner, Tag, TagLabel, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosRocket } from 'react-icons/io';
import { BiCodeAlt, BiImage } from 'react-icons/bi';
import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import { axiosConfig } from "../../utils/axiosConfig";

type Repo = {
    repository:{
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
    }
    
}

type Status = {
        url: string
        id: number,
        node_id: string
        task: string
        original_environment: string
        environment: string
        description: string | null
        created_at: string
        updated_at: string
        statuses_url: string
        repository_url: string
        creator: {
          login: string
          id: number,
          node_id: string
          avatar_url: string
          gravatar_id: string | null,
          url: string
          html_url:string
          followers_url: string
          following_url:string
          gists_url: string
          starred_url: string
          subscriptions_url:string
          organizations_url:string
          repos_url: string
          events_url: string
          received_events_url: string
          type:string
          site_admin: boolean
        },
        sha:string
        ref:string
        payload: {
          
        },
        transient_environment: boolean
        production_environment: boolean
        performed_via_github_app: any
}


export default function RepoCard({ repository }: Repo) {
    const [statusDeploy, setStatusDeploy] = useState<Array<Status> | Object>([])
    const [stars, setStars] = useState<Number>(0)
    const [load, setLoad] = useState(true)
    const toast = useToast()
    const header =   {
        headers:{
        'Content-Type': 'application/json'
    }
}

    useEffect(() => {
        const data = async () => {
            try {
                const statusDeploy = await axiosConfig(`repos/PAS19/${repository?.name}/deployments`)
                const urls = statusDeploy.data.map(url => url.statuses_url)
                const verify = await axios(`${urls[0]}`, header)
                const stars = await axiosConfig(`repos/PAS19/${repository?.name}/stargazers`)
                if(!stars){
                return toast({
                    title:'Github Error',
                    description:'Could not load information from github. Please reload the page',
                    status:'error',
                    isClosable:true,
                })}
                setStars(stars.data.length)
                setStatusDeploy(verify.data[0].state)
                setLoad(false)
            } catch (e) {
                setLoad(false)
            }
        }
        data()
    }, [])

    return(
        <Container as={'article'} boxShadow={'dark-lg'} p='5' mt='20' className={'Show'}>
            <Heading as={'h2'} padding='3' fontSize={'2xl'} >
                <Flex flexDir={'column'} align={'center'} color={useColorModeValue('#2E2EFF','cyan.300')} >
                    {repository.name}
                {!load ? 
                <Text >
                    <Tag textTransform={'capitalize'} variant={'outline'} colorScheme={statusDeploy === 'success' ? 'whatsapp':'red'} mt={'1'}>
                        <IoIosRocket />
                        <TagLabel>
                        Deploy {statusDeploy ? statusDeploy:'Pending'}
                        </TagLabel>
                   </Tag>
                   <Tag textTransform={'capitalize'} variant={'outline'} colorScheme={'yellow'} mt={'1'} ml={'1'}>
                    <StarIcon />
                        <TagLabel mt={'1'} ml={'1'}>
                            {stars}
                        </TagLabel>
                   </Tag>
               </Text>
               :
               <Spinner size={'sm'}/>
            }
               </Flex>
            </Heading>
           <Image src={`${repository.homepage ? repository.homepage:''}/img/${repository.homepage ? 'banner.png':'build.jpg'}`} alt={`banner-${repository.name}`} 
           w={'600px'} h={'300px'}/>
           <Flex mt={'2'} justify={'center'}>
               <Link href={`${repository?.homepage}`} target='_blank' _hover={{outline:'none', opacity:'0.6'}} _focus={{outline:'none'}}>
                   <Tag colorScheme={'telegram'}>
                       Homepage <ExternalLinkIcon mx={'2px'} />
                   </Tag>
                </Link>
                <Link href={repository.html_url} target='_blank' ml={'2'}  _hover={{outline:'none', opacity:'0.6'}} _focus={{outline:'none'}}>
                    <Tag colorScheme={'orange'} >
                        Source <BiCodeAlt size='20px' />
                    </Tag>
                </Link>
                <Link href={`${repository?.homepage ? `${repository.homepage}/img/banner.png`:'/img/build.jpg'}`} target='_blank' ml={'2'}  
                _hover={{outline:'none', opacity:'0.6'}} _focus={{outline:'none'}}>
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