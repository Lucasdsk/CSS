import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import SeletoresAtributosReadme from './SeletoresAtributos.md'
import StyledSeletoresAtributos from './styledSeletoresAtributos'

const SeletoresStories = storiesOf('Seletores', module)

SeletoresStories.add('Atributos', withReadme(SeletoresAtributosReadme, () => (
	<StyledSeletoresAtributos>
		<div data-attributo="foo-inicio">
			<button disabled>Botão desabilitado</button>
		</div>

		<div data-attributo="final-foo">
			<a href="http://www.google.com.br">Link para o Google</a>
		</div>

		<div data-attributo="inicio foo final">
			Conteúdo da DIV
		</div>

		<div data-attributo="inicio-foo-final">
			<input name="nome" type="text" placeholder="Nome" />
			<input name="email" type="email" placeholder="E-mail" />
		</div>
	</StyledSeletoresAtributos>
)))
