import React, {useMemo, useState, useEffect} from 'react';

import { Container, HistoryContainer, Filters } from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import FinancialCard from '../../components/FinancialCard'

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'

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
  const [monthSelected, setmonthSelected] = useState<string>('2' + String(new Date().getMonth() + 1));
  const [yearSelected, setyearSelected] = useState<string>(String(new Date().getFullYear()));

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
    {value: '01', label: 'Janeiro'},
    {value: '08', label: 'Agosto'},
    {value: '09', label: 'Setembro'}
  ]

  const years = [
    {value: 2020, label: 2020},
    {value: 2019, label: 2019},
    {value: 2018, label: 2018}
  ]

  useEffect(() => {
    const filteredData = listData.filter(item => {
      const date = item.date;
      const month = date.split('-')[1];
      const year = date.split('-')[0];

      console.log(date)
      console.log(`Selecionado: ${monthSelected} -- DB: ${month}`)
      console.log(`Selecionado: ${yearSelected} -- DB: ${year}`)

      return month === monthSelected && year === yearSelected;
    });

    const formattedData = filteredData.map(item => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#E44C4E'
      }
    });

    setData(formattedData);
  },[listData, monthSelected, yearSelected]);

  return(
    <Container>
      <ContentHeader title={title.name} lineColor={title.lineColor}>
        <SelectInput options={months} onChange={(e) => setmonthSelected(e.target.value)} defaultValue={monthSelected}/>
        <SelectInput options={years} onChange={(e) => setyearSelected(e.target.value)} defaultValue={yearSelected}/>
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
