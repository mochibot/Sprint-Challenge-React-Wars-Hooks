import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const Loading = () => {
  return (
    <Segment style={{padding: '40px', width: '50%', margin: '0 auto'}}>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </Segment>
  )
}

export default Loading;