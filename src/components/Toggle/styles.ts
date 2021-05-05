import styled from 'styled-components'
import Switch, {ReactSwitchProps} from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => props.theme.colors.white};
`;

export const ToggleSwitch = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.darkselect,
    offColor: theme.colors.lightselect
  }))<ReactSwitchProps>`
  margin: 0 10px;
`;
