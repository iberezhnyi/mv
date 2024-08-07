import styled from 'styled-components'
import { container, global } from 'styles'

export const HeaderSection = styled.header`
  padding-top: ${({ theme }) => theme.global.spacing(3)};
  padding-bottom: ${({ theme }) => theme.global.spacing(3)};

  background-color: ${({ theme }) => theme.headerBgColor};
`

export const HeaderContainer = styled.div`
  ${container}

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${global.breakpoint.tablet}) {
    justify-content: space-between;
  }
`
export const Logo = styled.img`
  /* margin-left: 50px; */
`
