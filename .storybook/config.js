import React from 'react';
import { configure, addDecorator  } from '@storybook/react';

addDecorator(story => (
  <div style={{
    width: '500px',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  }}>
    {story()}
  </div>
));

const req = require.context('../stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
