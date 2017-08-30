import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import SeletoresClassesReadme from './SeletoresClasses.md'
import StyledSeletoresClasses from './styledSeletoresClasses'

const SeletoresStories = storiesOf('Seletores', module)

SeletoresStories.add('Classes', withReadme(SeletoresClassesReadme, () => (
	<StyledSeletoresClasses>
		<ul data-selector-before=".elemento-ul" className="elemento-ul pai">
			<li className="elemento-li filho" data-selector-after=".elemento-li">Item 1</li>
			<li className="elemento-li filho" data-selector-after=".elemento-li">Item 2</li>
			<li className="elemento-li filho" data-selector-after=".elemento-li">Item 3</li>
		</ul>
	</StyledSeletoresClasses>
)))
