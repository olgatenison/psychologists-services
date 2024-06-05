import styled from "@emotion/styled";

export const FormButtonStyled = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.main_accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 30px;
  padding: 14px 39px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  text-align: center;

  transition: all 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverred_accent};
  }
  div {
    display: flex;
    gap: 18px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;
