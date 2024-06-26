import styled from "styled-components"

export const MobileMenuButtonWrapper = styled.div`
  display: flex;
  overflow: hidden;
`

export const MobileMenuButton = styled.button<{ $mobileMenu: boolean }>`
  position: relative;
  left: 0;
  z-index: 1000;

  width: 35px;
  height: 26px;
  padding: 0;

  background: none;
  border: none;

  &::before,
  &::after,
  & span,
  & span::before {
    content: "";
    position: absolute;
    display: block;

    width: 100%;
    height: 3px;

    background-color: #fff;
    border-radius: 5px;

    transition: all 200ms linear;
    will-change: opacity, top, bottom, transform;

    /* transition: opacity 1s linear, transform 1s linear;
    will-change: opacity, transform; */
  }

  &::before {
    top: ${(props) => (props.$mobileMenu ? "11px" : "0")};
    transform: ${(props) => (props.$mobileMenu ? "rotate(45deg)" : "")};
  }

  &::after {
    bottom: ${(props) => (props.$mobileMenu ? "12px" : "0")};
    transform: ${(props) => (props.$mobileMenu ? "rotate(-45deg)" : "")};
  }

  & span {
    top: 7px;
  }

  & span::before {
    top: 8px;
  }

  & span,
  & span::before {
    opacity: ${(props) => (props.$mobileMenu ? "0" : "1")};
    transform: ${(props) => (props.$mobileMenu ? "translateX(100%)" : "")};
  }

  @media (min-width: 768px) {
    display: none;
  }
`
