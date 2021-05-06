import React from "react"
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md'

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
        <ItemLink href='/list/entry-balance'> Entradas </ItemLink>
        <ItemLink href='/list/exit-balance'> Saídas </ItemLink>
        <ItemLink href='#'> Logout </ItemLink>
      </MenuContainer>
    </Container>
  )
}

export default Sidebar
