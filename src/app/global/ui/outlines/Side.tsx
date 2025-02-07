'use client'
import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/styles/color'
import sizes from '../../assets/styles/size'

const { light, dark, white } = colors
const { big } = sizes

const StyledMenus = styled.aside`
  min-height: 700px;
  background: ${light};

  a {
    color: ${dark};
    font-size: ${big};
    display: block;
    height: 45px;
    line-height: 43px;

    &.on {
      background: ${dark};
      color: ${white};
    }
    
    & + & {
      border-top: 2px solid ${dark};
    }
  }
`

const Side = () => {
  return <StyledMenus>주 메뉴...</StyledMenus>
}

export default React.memo(Side)
