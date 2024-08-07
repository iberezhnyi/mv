import { FC } from 'react'
import * as SC from './Footer.styled'

interface FooterProps {
  $isMainLayout?: boolean
}

export const Footer: FC<FooterProps> = ({ $isMainLayout }) => {
  return (
    <SC.Footer $isMainLayout={$isMainLayout}>
      <SC.FooterContainer $isMainLayout={$isMainLayout}>
        Coded by{' '}
        <SC.LinkFooter to="https://github.com/iberezhnyi">
          &#169;iberezhnyi
        </SC.LinkFooter>
      </SC.FooterContainer>
    </SC.Footer>
  )
}
