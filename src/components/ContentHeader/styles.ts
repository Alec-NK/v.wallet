import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 25px;
`;

export const TitleContainer = styled.div`
  border-bottom: 5px solid ${props => props.theme.colors.warning};

  > h1 {
    color: ${props => props.theme.colors.white};

  }
`;

export const Controllers = styled.div`
`;
