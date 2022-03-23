import { Container } from "@chakra-ui/react";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si"
import GridCard from "../Cards/GridCard";



const props = [
    {
        href:'/',
        icon:<SiNextdotjs size={'28px'}/>,
        text:'Next.js',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    {
        href:'/',
        icon:<FaReact size={'28px'}/>,
        text:'React',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    {
        href:'/',
        icon:<FaNodeJs size={'28px'}/>,
        text:'NodeJS',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    {
        href:'/',
        icon:<SiMongodb size={'28px'}/>,
        text:'MongoDb',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    {
        href:'/',
        icon:<SiExpress size={'28px'}/>,
        text:'Express',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    
]

export default function Skills() {
    return(
        <Container>
            <GridCard props={props} Title={'Skills'}/>
        </Container>
    )
}