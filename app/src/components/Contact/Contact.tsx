import { Container } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import GridCard from "../Cards/GridCard";

const props = [
    {
        href:'/',
        icon:<FaLinkedin size={'28px'}/>,
        text:'Linkedin',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    {
        href:'/',
        icon:<FaDiscord size={'28px'}/>,
        text:'Discord',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    {
        href:'/',
        icon:<FaGithub size={'28px'}/>,
        text:'GitHub',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    {
        href:'/',
        icon:<FaInstagram size={'28px'}/>,
        text:'Instagram',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    },
    {
        href:'/',
        icon:<FaWhatsapp size={'28px'}/>,
        text:'Whatsapp',
        bgLight:'#2ea4ff',
        bgDark:'#53b5ff',
    }
]

export default function Contact() {
    return(
    <Container>
       <GridCard props={props} Title={'Contact'}/>
    </Container>
    )
}   