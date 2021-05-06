import React, {useMemo, useState, useEffect} from 'react';

import { Container, HistoryContainer, Filters } from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'


interface IRouteParams {
  match: {
    params: {
      type: string
    }
  }
}

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);

  const { type } = match.params;

  const title = useMemo(() => {
    return type === 'entry-balance' ? {
      name: "Entradas",
      lineColor: "#E44C4E"
    } : {
      name: "Saídas",
      lineColor: "#F7931B"
    }
  },[type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  },[]);

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

  useEffect(() => {
    const response = listData.map(item => {
      return {
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dataFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#E44C4E'
      }
    })

    setData(response);
  },[]);

  return(
    <Container>
      <ContentHeader title={title.name} lineColor={title.lineColor}>
        <SelectInput options={months}/>
        <SelectInput options={years}/>
      </ContentHeader>

      <Filters>
        <button type="button" className="tagfilter tagfilter-recurrent">Recorrentes</button>
        <button type="button" className="tagfilter tagfilter-eventual">Eventuais</button>
      </Filters>

      <HistoryContainer>
        {
          data.map((item, id) => (
            <FinancialCard
              key={id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dataFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
      </HistoryContainer>
    </Container>
  )
}

export default List
