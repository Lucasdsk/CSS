import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import PosicionamentoFlexReadme from './PosicionamentoFlex.md'
import PosicionamentoFlexItemsReadme from './PosicionamentoFlexItems.md'
import StyledPosicionamentoFlex from './styledPosicionamentoFlex'

const PosicionamentoStories = storiesOf('Posicionamento', module)

PosicionamentoStories.add('Flex - Container', withReadme(PosicionamentoFlexReadme, () => (
	<StyledPosicionamentoFlex>
    <div className="exemplo-flex" data-selector-before="flex">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
        <li className="filho" data-selector-after="4" />
        <li className="filho" data-selector-after="5" />
        <li className="filho" data-selector-after="6" />
      </ul>
    </div>

    <div className="exemplo-flex flex-direction" data-selector-before="flex-direction">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
        <li className="filho" data-selector-after="4" />
        <li className="filho" data-selector-after="5" />
        <li className="filho" data-selector-after="6" />
      </ul>
    </div>

    <div className="exemplo-flex flex-wrap" data-selector-before="flex-wrap">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
        <li className="filho" data-selector-after="4" />
        <li className="filho" data-selector-after="5" />
        <li className="filho" data-selector-after="6" />
      </ul>
    </div>

    <div className="exemplo-flex justify-content" data-selector-before="justify-content">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
      </ul>
    </div>

    <div className="exemplo-flex align-items" data-selector-before="align-items">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
      </ul>
    </div>

    <div className="exemplo-flex align-content" data-selector-before="align-content">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
        <li className="filho" data-selector-after="4" />
        <li className="filho" data-selector-after="5" />
      </ul>
    </div>
	</StyledPosicionamentoFlex>
)))

PosicionamentoStories.add('Flex - Items', withReadme(PosicionamentoFlexItemsReadme, () => (
  <StyledPosicionamentoFlex>
    <div className="exemplo-flex" data-selector-before="flex">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
        <li className="filho" data-selector-after="4" />
        <li className="filho" data-selector-after="5" />
        <li className="filho" data-selector-after="6" />
      </ul>
    </div>

    <div className="exemplo-flex flex-order" data-selector-before="flex-order">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
        <li className="filho" data-selector-after="4" />
        <li className="filho" data-selector-after="5" />
        <li className="filho" data-selector-after="6" />
      </ul>
    </div>

    <div className="exemplo-flex flex-align-self" data-selector-before="align-self">
      <ul className="pai">
        <li className="filho" data-selector-after="1" />
        <li className="filho" data-selector-after="2" />
        <li className="filho" data-selector-after="3" />
      </ul>
    </div>
  </StyledPosicionamentoFlex>
)))
