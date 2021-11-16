import { useState, useEffect, Fragment, useReducer } from 'react'
import axios from 'axios';

  const dataFetchReducer = (state, action) => {
    switch(action.type) {
      case 'FETCH_INIT':
        return { 
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return { 
          ...state, 
          isLoading: false,
          isError: false,
          data: action.payload
        };
      case 'FETCH_FAILURE':
        return { 
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  }

  const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);
   
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
   
    useEffect(() => {
      let didCancel = false;
   
      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });
   
        try {
          const result = await axios(url);
   
          if (!didCancel) {
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: 'FETCH_FAILURE' });
          }
        }
      };
   
      fetchData();
   
      return () => {
        didCancel = true;
      };
    }, [url]);
   
    return [state, setUrl];
  };

const useHackerNewsApi = () => {
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const result = await axios(url);
 
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);
 
  return [{ data, isLoading, isError }, setUrl];
}

function App() {
  const [query, setQuery] = useState('redux');
  // const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi();
  const [{ data, isLoading, isError }, doFetch] = useDataApi('https://hn.algolia.com/api/v1/search?query=redux', {hits:[]});
  console.log(data, '???')
  // console.log(data, isLoading, isError, '////')
  // const [search, setSearch] = useState('redux');
  // useEffect(async () => {
  //   const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
  //   // console.log(result)
  //   setData(result.data);
  // }, []);

  return (
    <Fragment>
      <form onSubmit={(event) => {
        doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
        event.preventDefault();
      }}>
        <input 
          type="text"
          value={query}
          onChange={event=>setQuery(event.target.value)}
          />
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      )}
    </Fragment>
  )
}

export default App
