import styled from 'styled-components'

export const Container = styled.div`
`;

export const HistoryContainer = styled.div`
`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 35px;

  .tagfilter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.colors.white};

    margin: 0 10px;

    transition: opacity .3s;

    &:hover {
      opacity: .7;
    }

  }

  .tagfilter-recurrent::after {
    content: '';
    display: block;
    width: 65px;
    margin: 0 auto;
    border-bottom: 7px solid ${props => props.theme.colors.warning};
  }

  .tagfilter-eventual::after {
    content: '';
    display: block;
    width: 65px;
    margin: 0 auto;
    border-bottom: 7px solid ${props => props.theme.colors.success};
  }
`;
