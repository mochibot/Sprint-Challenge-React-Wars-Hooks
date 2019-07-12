import React, { useState } from 'react';

const Character = (props) => {
  const [infoStatus, setInfoStatus] = useState(false);

  const toggleInfo = (event) => {
    event.preventDefault();
    setInfoStatus(!infoStatus);
  }

  return (
    <div>
      <h2>{props.character.name}</h2>
      {infoStatus &&
      (<div>
        <div>Height: {props.character.height}</div>
        <div>Mass: {props.character.mass}</div>
        <div>Mass: {props.character.mass}</div>
        <div>Birth year: {props.character['birth_year']}</div>
      </div>)}
      <button onClick={(event) => toggleInfo(event)}>{infoStatus ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}

export default Character;