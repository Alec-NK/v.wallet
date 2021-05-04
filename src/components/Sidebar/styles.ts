import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SB;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
`;
