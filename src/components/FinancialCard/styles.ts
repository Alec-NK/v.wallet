import styled from 'styled-components'

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all .3s;

  width: 100%;
  margin: 10px 0;
  padding: 12px 10px;

  &:hover {
    transform: scale(1.01,1.01);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 5px;
  }

`;

export const Tag = styled.div<ITagProps>`
  position: absolute;
  left: 0;

  width: 5px;
  height: 60%;

  background-color: ${props => props.color}
`;
