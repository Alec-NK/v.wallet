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
        <ItemLink href='#'> <MdDashboard /> Dashboard </ItemLink>
        <ItemLink href='#'> Entradas </ItemLink>
        <ItemLink href='#'> Saídas </ItemLink>
        <ItemLink href='#'> Logout </ItemLink>
      </MenuContainer>
    </Container>
  )
}

export default Sidebar
