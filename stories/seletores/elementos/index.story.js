import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import SeletoresElementosReadme from './SeletoresElementos.md'
import StyledSeletoresElementos from './styledSeletoresElementos'

const SeletoresStories = storiesOf('Seletores', module)

SeletoresStories.add('Elementos', withReadme(SeletoresElementosReadme, () => (
	<StyledSeletoresElementos>
		<ul className="pai" data-tag-before="ul">
			<li className="filho" data-tag-after="li">Item 1</li>
			<li className="filho" data-tag-after="li">Item 2</li>
			<li className="filho" data-tag-after="li">Item 3</li>
		</ul>
	</StyledSeletoresElementos>
)))