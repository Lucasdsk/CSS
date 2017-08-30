import React from 'react'
import styled from 'styled-components'

const StyledSeletoresParentes = styled.div`
	
	.box-container {
		width: 380px;
		margin: 0;
		padding: 10px;
		list-style: none;

		.box {
			width: 85px;
			height: 50px;
			display: inline-block;
		}
	}		

	.seletor-precedente {
		margin-bottom: 10px;

		.box-container {
			.box-anterior ~ .box {
				background-color: #dcecc9;
			}
		}		
	}

	.seletor-irmao {
		margin-bottom: 10px;

		.box-container {
			.box + .box-irmao {
				background-color: #e7f0f7;
			}
		}	
	}

	.seletor-filho {
		ol {
			> li {
				font-weight: bold;
			}			
		}
	}

`
export default StyledSeletoresParentes
