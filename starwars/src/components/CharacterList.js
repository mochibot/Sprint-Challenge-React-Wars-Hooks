import React from 'react';
import Character from './Character'

const CharacterList = (props) => {
  return (
    <div>
      {props.characters.map(item => <Character key={item.name} character={item}/>)}
    </div>
  )
}

export default CharacterList;