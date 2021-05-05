import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SB;

  background-color: ${props => props.theme.colors.secondary};
  padding-left: 20px;

  border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const ItemLink = styled.a`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin: 8px 0;
  transition: .2s;

  &:hover {
    color: ${props => props.theme.colors.info};
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;
