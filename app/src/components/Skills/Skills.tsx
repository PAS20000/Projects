import { Container } from "@chakra-ui/react";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si"
import GridCard from "../Cards/GridCard";




export default function Skills() {
    
    const props = [
        {
            href:'https://nextjs.org/docs/getting-started',
            icon:<SiNextdotjs size={'28px'}/>,
            text:'Next.js',
            bgLight:'gray.900',
            bgDark:'gray.700',
        },
        {
            href:'https://reactjs.org/',
            icon:<FaReact size={'28px'}/>,
            text:'React',
            bgLight:'cyan',
            bgDark:'cyan.400',
        },
        {
            href:'https://nodejs.org/en/',
            icon:<FaNodeJs size={'28px'}/>,
            text:'NodeJS',
            bgLight:'teal',
            bgDark:'teal.400',
        },
        {
            href:'https://www.mongodb.com',
            icon:<SiMongodb size={'28px'}/>,
            text:'MongoDb',
            bgLight:'green',
            bgDark:'green.400',
        },
        {
            href:'https://expressjs.com',
            icon:<SiExpress size={'28px'}/>,
            text:'Express',
            bgLight:'black',
            bgDark:'black',
        },
        
    ]
    
    return(
        <Container>
            <GridCard props={props} Title={'Skills'}/>
        </Container>
    )
}