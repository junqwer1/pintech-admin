import styled, { css } from "styled-components";

const commonStyle = css`

`

export const TinyButtton = styled.button`
  ${commonStyle}
`

export const SmallButtton = styled.button`
  ${commonStyle}
`

export const Buttton = styled.button`
  ${commonStyle}
`

export const MediumButtton = styled.button`
  ${commonStyle}
`

export const BigButtton = styled.button`
  ${commonStyle}
`

export const ExtraButtton = styled.button`
  ${commonStyle}
`

export const ButttonGroup = styled.div`
  display: flex;

  width: 100%;
  ${({width}) => width && css`
    width: ${width};
  `}
  
  button {
    width: 0;
    flex-grow: 1;

    & + & {
      margin-left: 3px;
    }
  }
`