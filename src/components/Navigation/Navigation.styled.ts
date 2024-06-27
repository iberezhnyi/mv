import { Menu, MenuItem } from "react-pro-sidebar"
import styled from "styled-components"

export const Navigation = styled(Menu)``

export const NavigationItem = styled(MenuItem)`
  a.active {
    color: tomato;
  }

  .ps-menu-button:hover {
    color: tomato;
    background-color: inherit !important;
  }
`
