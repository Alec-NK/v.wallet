import React from "react"
import { MdDashboard, MdExitToApp } from 'react-icons/md'
import { BiArrowFromBottom, BiArrowToBottom} from 'react-icons/bi'


import { Container, Header, Title, LogoImg, MenuContainer, ItemLink } from './styles'
import logo from '../../assets/logo.svg'

const Sidebar: React.FC = () => {
  return(
    <Container>
      <Header>
        <LogoImg src={logo} alt="Logo V.Wallet" />
        <Title>V-Wallet</Title>
      </Header>

      <MenuContainer>
        <ItemLink href='/dashboard'> <MdDashboard /> Dashboard </ItemLink>
        <ItemLink href='/list/entry-balance'> <BiArrowFromBottom /> Entradas </ItemLink>
        <ItemLink href='/list/exit-balance'> <BiArrowToBottom /> Saídas </ItemLink>
        <ItemLink href='#'> <MdExitToApp /> Logout </ItemLink>
      </MenuContainer>
    </Container>
  )
}

export default Sidebar
