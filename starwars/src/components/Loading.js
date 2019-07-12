import React from 'react';
import { Dimmer, Loader, Image, Segment  } from 'semantic-ui-react';

const Loading = () => {
  return (
    <Segment style={{padding: '40px'}}>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  )
}

export default Loading;