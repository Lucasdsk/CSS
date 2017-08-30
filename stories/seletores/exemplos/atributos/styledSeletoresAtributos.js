import React from 'react'
import styled from 'styled-components'

const styledSeletoresAtributos = styled.div`
	
	/* Atributo inicia com foo */
	[data-attributo^="foo"] {
		border: 1px solid #1e5281;
	}
	
	/* Atributo termina com foo */
	[data-attributo$="foo"] {
		border: 1px solid #557c23;
	}

	/* Atributo possui foo separado por espaço */
	[data-attributo~="foo"] {
		border: 1px solid #b63f43;
		color: #179da6;
	}

	/* Atributo possui foo */
	[data-attributo*="foo"] {
		padding: 10px;
		margin-bottom: 10px;
	}

	[disabled] {
		cursor: not-allowed;
		opacity: .8;
	}

	a[href="http://www.google.com.br"] {
		text-decoration: none;
		color: #6f9e32;
	}

	[href*="google"] {
		font-weight: bold;
	}

	input[type="text"] {
		border: 2px dotted #3b495e;
	}

	[type="email"] {
		border: 2px dashed #6197c6;
	}
`
export default styledSeletoresAtributos
