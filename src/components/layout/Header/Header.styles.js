import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray10};
  width: 1184px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const NavItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
  }

  a.active::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.main_accent};
  }
  transition: all 0.3s linear;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.main_accent};
  }
`;

export const ButtonList = styled.div`
  display: flex;
  gap: 8px;
`;
