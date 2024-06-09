import styled from "@emotion/styled";

export const OutlineButtonStyled = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.gray10};
  border-radius: 30px;
  padding: 14px 39px;
  font-size: 16px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  text-overflow: ellipsis;
  transition: all 0.3s linear;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.main_accent};
  }
`;
