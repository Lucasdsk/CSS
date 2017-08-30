import React from 'react'
import styled from 'styled-components'

const styledPseudoSeletores = styled.div`
	div:empty {
		width: 50px;
		height: 50px;
		border: 1px solid #fb8486;
	}

	a:link {
		text-decoration: none;
	}

	button:active {
		font-size: 16px;
		font-weight: bold;
		color: #8cc152;
	}

	span:hover {
		font-size: 16px;
		font-weight: bold;
		color: #8cc152;
	}

	input {
		color: #6197c6;
		border: 1px solid #6197c6;

		&:focus {
			outline: none;
			color: #6f9e32;
			border: 1px dashed #ffc107;
		}
	}

	button:disabled {
		border: 2px dashed #6197c6;
		cursor: not-allowed;
		background-color: #e7f0f7;
	}

	input:checked + label {
		color: #557c23;
	}
`
export default styledPseudoSeletores
