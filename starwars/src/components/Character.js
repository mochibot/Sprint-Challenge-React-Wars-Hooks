import React, { useState } from 'react';
import { Card, Button, List } from 'semantic-ui-react';

import Film from './Film'

const Character = (props) => {
  const [infoStatus, setInfoStatus] = useState(false);

  const toggleInfo = (event) => {
    event.preventDefault();
    setInfoStatus(!infoStatus);
  }
  const films = [];
  if (props.films) {
    props.character.films.forEach(item => {
      films.push(props.films.find(element => element.url === item))
      console.log(item)
    })
  }
  console.log(props.films);
  console.log(films);

  return (
    <Card.Group centered>
      <Card style={{width: '50%', fontSize: '20px'}}>
        <Card.Content>
          <Card.Header style={{padding: '15px'}}>{props.character.name}</Card.Header>
          {infoStatus &&
          (<Card.Description style={{fontSize: '16px', padding: '0 0 15px 80px', textAlign: 'left'}}>
            <List>
              <List.Item>
                <List.Content>Height: {props.character.height}</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Mass: {props.character.mass}</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Hair Color: {props.character['hair_color']}</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Skin Color: {props.character['skin_color']}</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Birth year: {props.character['birth_year']}</List.Content>
              </List.Item>
            </List>
            <List>
              Films:
              {films.map((item, index) => <Film key={index} film={item} />)}
            </List>
          </Card.Description>)}
          <Button onClick={(event) => toggleInfo(event)}>{infoStatus ? 'Show Less' : 'Show More'}</Button>
        </Card.Content>  
      </Card>  
    </Card.Group>
  )
}

export default Character;