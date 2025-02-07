'use client'
import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/styles/color'
import sizes from '../../assets/styles/size'

const { light, dark, white } = colors
const { big } = sizes

const StyledMenus = styled.aside`
  min-height: 800px;
  background: ${light};

  a {
    color: ${dark};
    font-size: ${big};
    display: block;
    height: 55px;
    line-height: 53px;
    text-align: center;

    
  }

  a.on {
      background: ${dark};
      color: ${white};
  }
    
  a + a {
      border-top: 2px solid ${dark};
  }
`

const Side = () => {
  return <StyledMenus>
    <a href="/member">회원관리</a>
    <a href='/board'>게시판 관리</a>
  </StyledMenus>
}

export default React.memo(Side)
