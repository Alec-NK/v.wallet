import styled from 'styled-components'

/*
  --- Layout ---
  MH = Main Header
  SB = Sidebar
  CT = Content
*/

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15rem auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
  'SB MH'
  'SB CT';

  height: 100vh;
`;
