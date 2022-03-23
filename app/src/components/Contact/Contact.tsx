import { Container } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import GridCard from "../Cards/GridCard";

const props = [
    {
        href:'/',
        icon:<FaLinkedin size={'28px'}/>,
        text:'Linkedin',
        bgLight:'blue',
        bgDark:'blue.400',
    },
    {
        href:'/',
        icon:<FaDiscord size={'28px'}/>,
        text:'Discord',
        bgLight:'blue.600',
        bgDark:'blue.400',
    },
    {
        href:'/',
        icon:<FaGithub size={'28px'}/>,
        text:'GitHub',
        bgLight:'purple',
        bgDark:'purple.400',
    },
    {
        href:'/',
        icon:<FaInstagram size={'28px'}/>,
        text:'Instagram',
        bgLight:'linear-gradient( #fa2d2d, #68028a);',
        bgDark:'linear-gradient( #f94040, #ff57ff);',
    },
    {
        href:'/',
        icon:<FaWhatsapp size={'28px'}/>,
        text:'Whatsapp',
        bgLight:'green',
        bgDark:'green.400',
    }
]

export default function Contact() {
    return(
    <Container>
       <GridCard props={props} Title={'Contact'}/>
    </Container>
    )
}   