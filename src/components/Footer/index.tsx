import { Container, Content, Link } from "./styles";
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export function Footer() {
  return (
    <Container>
      <Content>
        <p>Matheus de Andrade  © 2022</p>
        <Link href='https://www.linkedin.com/in/matheus-w-a-/'>
          <FaLinkedinIn />
          <p>Linkedin</p>  
        </Link>

        <Link href='https://github.com/matheus-w-a'>
          <BsGithub />
          <p>Github</p> 
        </Link>

        <Link href='mailto:matheus.w.a@outlook.com.br'>
          <MdEmail />
          <p>Email</p>  
        </Link>
      </Content>
    </Container>
  )
}