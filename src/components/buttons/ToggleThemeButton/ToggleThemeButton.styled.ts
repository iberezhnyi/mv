import styled from 'styled-components'
import { btnCommonStyles } from 'styles/common.styled'

export const ToggleThemeButton = styled.button`
  ${btnCommonStyles}/* position: absolute;
  top: 1.5%;
  right: 5%; */
`

export const ToggleThemeIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  fill: ${({ theme }) => theme.textColor};
`