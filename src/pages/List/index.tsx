import React from 'react';

import { Container, HistoryContainer, Filters } from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

const List: React.FC = () => {
  const months = [
    {value: 7, label: 'Julho'},
    {value: 8, label: 'Agosto'},
    {value: 9, label: 'Setembro'}
  ]

  const years = [
    {value: 2020, label: 2020},
    {value: 2019, label: 2019},
    {value: 2018, label: 2018}
  ]

  return(
    <Container>
      <ContentHeader title="Saída" lineColor="#E44C4E">
        <SelectInput options={months}/>
        <SelectInput options={years}/>
      </ContentHeader>

      <Filters>
        <button type="button" className="tagfilter tagfilter-recurrent">Recorrentes</button>
        <button type="button" className="tagfilter tagfilter-eventual">Eventuais</button>
      </Filters>

      <HistoryContainer>
        <FinancialCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
      </HistoryContainer>
    </Container>
  )
}

export default List
