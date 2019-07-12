import React from 'react';
import { List } from 'semantic-ui-react';

const Film = (props) => {
  return (
    <List.Item style={{padding: '5px 0 0 20px'}}>  
      <List.Icon name='film' />
      <List.Content>{props.film.title}</List.Content>
    </List.Item>
  )
}

export default Film;