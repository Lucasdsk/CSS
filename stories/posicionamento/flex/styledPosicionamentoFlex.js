import React from 'react'
import styled from 'styled-components'
// test codespaces
const StyledSeletoresClasses = styled.div`
  .exemplo-flex {
  	ul {
      width: 300px;
      height: 150px;
      padding: 0;
      display: flex;

      li {
        flex: 1;
        height: 60px;
        display: inline-block;
      }
    }

    &.flex-direction {
      ul {
        height: auto;
        flex-direction: column;

        li {
          flex-basis: 30px;
        }
      }
    }

    &.flex-wrap {
      ul {
        flex-wrap: wrap;

        li {
          flex: unset;
          width: 50px
        }
      }
    }

    &.justify-content {
      ul {
        justify-content: space-between;

        li {
          flex: 0 1 50px;
        }
      }
    }

    &.align-items {
      ul {
        align-items: center;
      } 
    }

    &.align-content {
      ul {
        align-content: center;
        flex-wrap: wrap;
        height: 200px;

        li {
          flex: 0 1 60px;
        }
      } 
    }

    &.flex-order {
      ul {
        li {
          &:nth-child(2) {
            order: 1;
          }
        }
      }
    }

    &.flex-align-self {
      ul {
        li {
          width: 50px;
          &:nth-child(2) {
            align-self: flex-end;
          }
        }
      }
    }
  }
`
export default StyledSeletoresClasses
