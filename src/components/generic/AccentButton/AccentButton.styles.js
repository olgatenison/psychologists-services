import styled from "@emotion/styled";

export const AccentButtonleStyled = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.main_accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 30px;
  padding: 18px 50px;
  font-size: 20px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  width: auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverred_accent};
  }

  .arrow-icon {
    margin-left: 18px;
  }
`;
