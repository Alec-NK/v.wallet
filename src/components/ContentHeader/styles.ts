import styled from 'styled-components'

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 35px;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  border-bottom: 5px solid ${props => props.lineColor};

  > h1 {
    color: ${props => props.theme.colors.white};

  }
`;

export const Controllers = styled.div`
  display: flex;
  flex-direction: row;
`;
