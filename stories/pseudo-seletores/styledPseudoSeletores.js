import React from 'react'
import styled from 'styled-components'

const styledPseudoSeletores = styled.div`
	[data-selector-before] {
		width: 100%;
		padding: 10px;
		margin-bottom: 10px;
		border: 1px dashed #496072;
	}

	.box {
		width: 60px;
		height: 30px;
		display: inline-block;
	}

	.exemplo-empty {
		div:empty {
			width: 50px;
			height: 50px;
			border: 1px solid #fb8486;
		}
	}

	.exemplo-link {
		a:link {
			text-decoration: none;
		}
	}

	.exemplo-active {
		button:active {
			font-size: 16px;
			font-weight: bold;
			color: #8cc152;
		}
	}

	.exemplo-hover {
		.span:hover {
			font-size: 16px;
			font-weight: bold;
			color: #8cc152;
		}
	}

	.exemplo-focus {
		input {
			color: #6197c6;
			border: 1px solid #6197c6;

			&:focus {
				outline: none;
				color: #6f9e32;
				border: 1px dashed #ffc107;
			}
		}
	}

	.exemplo-disabled {
		button:disabled {
			border: 2px dashed #6197c6;
			cursor: not-allowed;
			background-color: #e7f0f7;
		}
	}

	.exemplo-checked {
		input:checked + label {
			color: #557c23;
		}
	}

	.exemplo-not {
		div {
			border: 1px solid #8cc152;
			margin-right: 5px;
		}

		div:not(.foo) {
			background-color: #8cc152;
		}
	}

	.exemplo-nth-child,
	.exemplo-nth-child-2 {
		div {
			margin-right: 5px;
			border: 1px solid #8cc152;
			background-color: #8cc152;
		}
	}

	.exemplo-nth-child {
		margin-bottom: 10px;

		div {
			&:nth-child(2) {
				background-color: #557c23;
			}
		}
	}

	.exemplo-nth-child-2 {
		div {
			&:nth-child(2n) {
				background-color: #557c23;
			}
		}
	}

	.exemplo-nth-last-child {
		div {
			margin-right: 5px;
			border: 1px solid #8cc152;
			background-color: #8cc152;

			&:nth-last-child(2) {
				background-color: #557c23;
			}
		}
	}

	.exemplo-nth-last-of-type {
		.box {
			margin-right: 5px;
			border: 1px solid #8cc152;
			background-color: #8cc152;
		}

		span:nth-last-of-type(2) {
			background-color: #557c23;
		}
	}

	.exemplo-first-child {
		.box {
			margin-right: 5px;
			border: 1px solid #8cc152;
			background-color: #8cc152;

			&:first-child {
				background-color: #557c23;
			}
		}
	}

	.exemplo-last-child {
		.box {
			margin-right: 5px;
			border: 1px solid #8cc152;
			background-color: #8cc152;

			&:last-child {
				background-color: #557c23;
			}
		}
	}
`

export default styledPseudoSeletores
