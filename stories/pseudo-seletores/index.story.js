import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import PseudoSeletoresReadme from './PseudoSeletores.md'
import StyledPseudoSeletores from './styledPseudoSeletores'

const SeletoresStories = storiesOf('Pseudo-seletores', module)

SeletoresStories.add('Exemplos', withReadme(PseudoSeletoresReadme, () => (
	<StyledPseudoSeletores>
		<div data-selector-before=":empty">
			<div></div>
		</div>
		<div data-selector-before=":link">
			<div>
				<a href="#">sou um link</a>				
			</div>
		</div>
		<div data-selector-before=":active">
			<div>
				<button>clica em mim ;)</button>
			</div>
		</div>
		<div data-selector-before=":hover">
			<div>
				<span>passa o mouse em mim</span>
			</div>
		</div>
		<div data-selector-before=":focus">
			<div>
				<input type="text" placeholder=":focus" />
			</div>
		</div>

		<div data-selector-before=":disabled">
			<div>
				<button disabled>botão desabilido</button>
			</div>
		</div>

		<div data-selector-before=":checked">
			<div>
				<input type="checkbox" id="input-check" />
				<label htmlFor="input-check"> opção para checar</label>
			</div>
		</div>

	</StyledPseudoSeletores>
)))
