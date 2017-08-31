import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import PosicionamentoFloatReadme from './PosicionamentoFloat.md'
import StyledPosicionamentoFloat from './styledPosicionamentoFloat'

const PosicionamentoStories = storiesOf('Posicionamento', module)

PosicionamentoStories.add('Float', withReadme(PosicionamentoFloatReadme, () => (
	<StyledPosicionamentoFloat>
		<div>Se precisar usar, não use...</div>
    <div>Se ainda assim achar que é necessário utlizar, então procure o <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">FLEX ;)</a></div>
	</StyledPosicionamentoFloat>
)))
