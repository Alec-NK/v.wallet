import React from 'react';

import { Container } from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

const List: React.FC = () => {
  const frutas = [
    {value: 'Maça', label: 'Maça'},
    {value: 'Uva', label: 'Uva'},
    {value: 'Banana', label: 'Banana'}
  ]

  return(
    <Container>
    <ContentHeader title="List" lineColor="#E44C4E">
      <SelectInput options={frutas}/>
    </ContentHeader>
  </Container>
  )
}

export default List
