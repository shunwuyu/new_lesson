import React from 'react';
import axios from 'axios';
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from '@table-library/react-table-library/table';

const BASE_URL = 'https://hn.algolia.com/api/v1/search'; 

export default function App() {
  const [data, setData] = React.useState({ nodes: [] });
  const fetchData = React.useCallback(async () => {
    const url = `${BASE_URL}?query=react`;
    const result = await axios.get(url);
 
    setData({ nodes: result.data.hits });
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Table data={data}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Title</HeaderCell>
              <HeaderCell>Created At</HeaderCell>
              <HeaderCell>Points</HeaderCell>
              <HeaderCell>Comments</HeaderCell>
            </HeaderRow>
          </Header>
 
          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>
                  <a href={item.url}>{item.title}</a>
                </Cell>
                <Cell>
                  {new Date(
                    item.created_at
                  ).toLocaleDateString('zh-cn', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </Cell>
                <Cell>{item.points}</Cell>
                <Cell>{item.num_comments}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  )
}