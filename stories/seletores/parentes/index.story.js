import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import SeletoresParentesReadme from './SeletoresParentes.md'
import StyledSeletoresParentes from './styledSeletoresParentes'

const SeletoresStories = storiesOf('Seletores', module)

SeletoresStories.add('Parentes', withReadme(SeletoresParentesReadme, () => (
	<StyledSeletoresParentes>
		<div className="seletor-precedente">
			<div className="box-container pai" data-selector-after=".box-container">
				<div className="box box-anterior filho" data-selector-after=".box-anterior">
					<div>Card 1</div>
				</div>
				<div className="box filho" data-selector-after=".box">
					<div>Card 2</div>
				</div>
				<div className="box filho" data-selector-after=".box">
					<div>Card 3</div>
				</div>
			</div>
		</div>

		<div className="seletor-irmao">
			<div className="box-container pai" data-selector-after=".box-container">
				<div className="box filho" data-selector-after=".box">
					<div>Card 1</div>
				</div>
				<div className="box box-irmao filho" data-selector-after=".box-irmao">
					<div>Card 2</div>
				</div>
				<div className="box filho" data-selector-after=".box">
					<div>Card 3</div>
				</div>
				<div className="box box-irmao filho" data-selector-after=".box-irmao">
					<div>Card 4</div>
				</div>
			</div>
		</div>

		<div className="seletor-filho">
			<ol>
				<li>Card 1</li>				
				<ul>
					<li>arroz</li>
					<li>feijão</li>
				</ul>
				<li>Card 3</li>
			</ol>			
		</div>
	</StyledSeletoresParentes>
)))
