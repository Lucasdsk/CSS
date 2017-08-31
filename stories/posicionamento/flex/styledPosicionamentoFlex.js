import React from 'react'
import styled from 'styled-components'

const StyledSeletoresClasses = styled.div`
	ul {
    width: 300px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 60px;
      height: 60px;
      display: inline-block;

      &:last-child {
        align-self: flex-end;
      }
    }
  }
`
export default StyledSeletoresClasses
