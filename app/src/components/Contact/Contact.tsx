import { Container } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import GridCard from "../Cards/GridCard";



export default function Contact() {

    const props = [
        {
            href:'https://www.linkedin.com/in/pedro-schroeder-a45a181a4/',
            icon:<FaLinkedin size={'28px'}/>,
            text:'Linkedin',
            bgLight:'blue',
            bgDark:'blue.400',
        },
        {
            href:'https://discord.gg/VMuKG4sXBC',
            icon:<FaDiscord size={'28px'}/>,
            text:'Discord',
            bgLight:'blue.600',
            bgDark:'blue.400',
        },
        {
            href:'https://github.com/PAS19',
            icon:<FaGithub size={'28px'}/>,
            text:'GitHub',
            bgLight:'purple',
            bgDark:'purple.400',
        },
        {
            href:'https://www.instagram.com/pas__dev/',
            icon:<FaInstagram size={'28px'}/>,
            text:'Instagram',
            bgLight:'linear-gradient( #fa2d2d, #68028a);',
            bgDark:'linear-gradient( #f94040, #ff57ff);',
        },
        {
            href:'https://api.whatsapp.com/send?phone=5551989927403',
            icon:<FaWhatsapp size={'28px'}/>,
            text:'Whatsapp',
            bgLight:'green',
            bgDark:'green.400',
        }
    ]
    
    return(
    <Container>
       <GridCard props={props} Title={'Contact'}/>
    </Container>
    )
}   