import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import PosicionamentoFlexReadme from './PosicionamentoFlex.md'
import StyledPosicionamentoFlex from './styledPosicionamentoFlex'

const PosicionamentoStories = storiesOf('Posicionamento', module)

PosicionamentoStories.add('Flex', withReadme(PosicionamentoFlexReadme, () => (
	<StyledPosicionamentoFlex>
    <ul className="pai">
      <li className="filho" data-selector-after="1" />
      <li className="filho" data-selector-after="2" />
      <li className="filho" data-selector-after="3" />
      <li className="filho" data-selector-after="4" />
      <li className="filho" data-selector-after="5" />
      <li className="filho" data-selector-after="6" />
    </ul>
	</StyledPosicionamentoFlex>
)))
