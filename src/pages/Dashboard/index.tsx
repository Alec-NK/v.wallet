import React from 'react';
import { isPropertySignature } from 'typescript';

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  const options = [
    {value: 'Alec', label: 'Alec'},
    {value: 'Maria', label: 'Maria'},
    {value: 'Joao', label: 'Joao'}
  ]

  const frutas = [
    {value: 'Maça', label: 'Maça'},
    {value: 'Uva', label: 'Uva'},
    {value: 'Banana', label: 'Banana'}
  ]

  return(
    <Container>
      <ContentHeader title="Dashboard" lineColor="#E44C4E">
        <SelectInput options={options}/>
      </ContentHeader>
    </Container>
  )
}

export default Dashboard
