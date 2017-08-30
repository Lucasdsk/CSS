import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import SeletoresIDsReadme from './SeletoresIDs.md'
import StyledSeletoresIDs from './styledSeletoresIDs'

const SeletoresStories = storiesOf('Seletores', module)

SeletoresStories.add('IDs', withReadme(SeletoresIDsReadme, () => (
	<StyledSeletoresIDs>
		<ul id="elemento-ul" className="pai" data-selector-before="#elemento-ul">
			<li id="elemento-li-1" className="filho" data-selector-after="#elemento-li-1">Item 1</li>
			<li id="elemento-li-2" className="filho" data-selector-after="#elemento-li-2">Item 2</li>
			<li id="elemento-li-3" className="filho" data-selector-after="#elemento-li-3">Item 3</li>
		</ul>
	</StyledSeletoresIDs>
)))
