import React from 'react';
import Character from './Character'

import { Container } from 'semantic-ui-react';

const CharacterList = (props) => {
  return (
    <Container fluid>
      {props.characters.map(item => <Character films={props.films} key={item.name} character={item}/>)}
    </Container>
  )
}

export default CharacterList;