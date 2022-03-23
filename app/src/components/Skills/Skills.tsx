import { Container } from "@chakra-ui/react";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si"
import GridCard from "../Cards/GridCard";



const props = [
    {
        href:'/',
        icon:<SiNextdotjs size={'28px'}/>,
        text:'Next.js',
        bgLight:'gray.900',
        bgDark:'gray.700',
    },
    {
        href:'/',
        icon:<FaReact size={'28px'}/>,
        text:'React',
        bgLight:'cyan',
        bgDark:'cyan.400',
    },
    {
        href:'/',
        icon:<FaNodeJs size={'28px'}/>,
        text:'NodeJS',
        bgLight:'teal',
        bgDark:'teal.400',
    },
    {
        href:'/',
        icon:<SiMongodb size={'28px'}/>,
        text:'MongoDb',
        bgLight:'green',
        bgDark:'green.400',
    },
    {
        href:'/',
        icon:<SiExpress size={'28px'}/>,
        text:'Express',
        bgLight:'black',
        bgDark:'black',
    },
    
]

export default function Skills() {
    return(
        <Container>
            <GridCard props={props} Title={'Skills'}/>
        </Container>
    )
}