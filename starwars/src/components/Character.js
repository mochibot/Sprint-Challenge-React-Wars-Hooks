import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';

const Character = (props) => {
  const [infoStatus, setInfoStatus] = useState(false);

  const toggleInfo = (event) => {
    event.preventDefault();
    setInfoStatus(!infoStatus);
  }

  return (
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Card.Header style={{padding: '15px'}}>{props.character.name}</Card.Header>
          {infoStatus &&
          (<Card.Description style={{fontSize: '16px', padding: '0 0 15px 0', textAlign: 'left', paddingLeft: '60px'}}>
            <div>Height: {props.character.height}</div>
            <div>Mass: {props.character.mass}</div>
            <div>Hair Color: {props.character['hair_color']}</div>
            <div>Eye Color: {props.character['eye_color']}</div>
            <div>Birth year: {props.character['birth_year']}</div>
          </Card.Description>)}
          <Button onClick={(event) => toggleInfo(event)}>{infoStatus ? 'Show Less' : 'Show More'}</Button>
        </Card.Content>  
      </Card>  
    </Card.Group>
  )
}

export default Character;