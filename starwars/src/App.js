import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

import Loading from './components/Loading'
import CharacterList from './components/CharacterList';


import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log('fetch data success: ', response)
        setData(response.data.results);
        console.log(data);
      })
      .catch(error => {
        console.log('error fetching data: ', error);
        console.log(!data);
        console.log(data);
      })
  }, [])

  return (
    <div className="App">
      <Header style={{fontSize: '30px', paddingTop: '10px'}}>React Wars</Header>
      {data.length === 0 ? <Loading/> : <CharacterList characters={data} />}
    </div>
  );
}

export default App;
