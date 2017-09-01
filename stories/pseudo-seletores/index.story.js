import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import PseudoSeletoresReadme from './PseudoSeletores.md'
import StyledPseudoSeletores from './styledPseudoSeletores'

const SeletoresStories = storiesOf('Pseudo-seletores', module)

SeletoresStories.add('Exemplos', withReadme(PseudoSeletoresReadme, () => (
	<StyledPseudoSeletores>
		<div className="exemplo-empty" data-selector-before=":empty">
			<div />
		</div>

		<div className="exemplo-link" data-selector-before=":link">
			<div>
				<a href="#">sou um link</a>
			</div>
		</div>

		<div className="exemplo-active" data-selector-before=":active">
			<div>
				<button>clica em mim ;)</button>
			</div>
		</div>

		<div className="exemplo-hover" data-selector-before=":hover">
			<div>
				<span className="span">passa o mouse em mim</span>
			</div>
		</div>

		<div className="exemplo-focus" data-selector-before=":focus">
			<div>
				<input type="text" placeholder=":focus" />
			</div>
		</div>

		<div className="exemplo-disabled" data-selector-before=":disabled">
			<div>
				<button disabled>botão desabilido</button>
			</div>
		</div>

		<div className="exemplo-checked" data-selector-before=":checked">
			<div>
				<input type="checkbox" id="input-check" />
				<label htmlFor="input-check"> opção para checar</label>
			</div>
		</div>

		<div data-selector-before=":not">
			<div className="exemplo-not">
				<div className="box"/>
				<div className="box foo" />
				<div className="box"/>
			</div>
		</div>

		<div data-selector-before=":nth-child(n)">
			<div className="exemplo-nth-child">
				<div className="box" data-selector-after="(1)" />
				<div className="box" data-selector-after="(2)" />
				<div className="box" data-selector-after="(3)" />
				<div className="box" data-selector-after="(4)" />
			</div>

			<div className="exemplo-nth-child-2">
				<div className="box" data-selector-after="(1)" />
				<div className="box" data-selector-after="(2)" />
				<div className="box" data-selector-after="(3)" />
				<div className="box" data-selector-after="(4)" />
			</div>
		</div>

		<div data-selector-before=":nth-last-child(n)">
			<div className="exemplo-nth-last-child">
				<div className="box" data-selector-after="(1)" />
				<div className="box" data-selector-after="(2)" />
				<div className="box" data-selector-after="(3)" />
				<div className="box" data-selector-after="(4)" />
			</div>
		</div>

		<div data-selector-before=":nth-last-of-type(n)">
			<div className="exemplo-nth-last-of-type">
				<div className="box" data-tag-after="div" />
				<div className="box" data-tag-after="div" />
				<span className="box" data-tag-after="span" />
				<div className="box" data-tag-after="div" />
				<span className="box" data-tag-after="span" />
			</div>
		</div>

		<div data-selector-before=":first-child">
			<div className="exemplo-first-child">
				<div className="box" />
				<div className="box" />
				<div className="box" />
				<div className="box" />
				<div className="box" />
			</div>
		</div>

		<div data-selector-before=":last-child">
			<div className="exemplo-last-child">
				<div className="box" />
				<div className="box" />
				<div className="box" />
				<div className="box" />
				<div className="box" />
			</div>
		</div>
	</StyledPseudoSeletores>
)))
