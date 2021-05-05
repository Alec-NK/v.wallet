import React from "react"

import { Container, TitleContainer, Controllers } from './styles'

const ContentHeader: React.FC = () => {
  return(
    <Container>
      <TitleContainer>
        <h1>Dashboard</h1>
      </TitleContainer>
      <Controllers>
        <button type="button">Botão1</button>
        <button type="button">Botão2</button>
      </Controllers>
    </Container>
  )
}

export default ContentHeader
