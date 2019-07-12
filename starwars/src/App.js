import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Button } from 'semantic-ui-react';

import Loading from './components/Loading'
import CharacterList from './components/CharacterList';


import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        console.log('fetch data success: ', response)
        setData(response.data);
      })
      .catch(error => {
        console.log('error fetching data: ', error);
      })
  }, [page])
  

  const nextPage= () => {
    if (data.next === null) {
      alert('At the start of data');
    } else {
      setPage(page + 1);
    }
  }

  const prevPage= () => {
    if (data.previous === null) {
      alert('At the start of data');
    } else {
      setPage(page - 1);
    }
  }

  return (
    <div className="App">
      <Header style={{fontSize: '30px', paddingTop: '10px'}}>React Wars</Header>
      <Button.Group style={{padding: '15px 0'}}>
        <Button onClick={prevPage} labelPosition='left' icon='left chevron' content='Previous'></Button>
        <Button onClick={nextPage} labelPosition='right' icon='right chevron' content='Forward'></Button>
      </Button.Group>
      {data.length === 0 ? <Loading/> : <CharacterList characters={data.results} />}
    </div>
  );
}

export default App;
