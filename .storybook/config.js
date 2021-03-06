import React from 'react';
import { configure, addDecorator  } from '@storybook/react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  * {
    font-family: Arial;
  }

  .pai {
    border: 1px dashed #fb8486;
    .filho {
      border: 1px dashed #6f9e32;
      margin: 4px;
    }
  }

  [data-tag-before],
  [data-tag-after],
  [data-selector-before],
  [data-selector-after] {
    &::after,
    &::before {
      display: inline-block;
      color: #496072;
      font-size: 12px;
      font-weight: bold;
      padding: 2px;
      background-color: #afcef3;
      border-radius: 5px;
    }
  }

  [data-tag-after],
  [data-selector-after] {
    &::after {
      margin-left: 5px;
    }
  }

  [data-tag-before] {
    &::before {
      content: "<" attr(data-tag-before) "/>";
    }
  }

  [data-tag-after] {
    &::after {
      content: "<" attr(data-tag-after) "/>";
    }
  }

  [data-selector-before] {
    &::before {
      content: attr(data-selector-before);
    }
  }

  [data-selector-after] {
    &::after {
      content: attr(data-selector-after);
    }
  }
`

addDecorator(story => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  }}>
    {story()}
  </div>
));

const req = require.context('../stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
