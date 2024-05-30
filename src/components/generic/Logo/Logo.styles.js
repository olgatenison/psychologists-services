import styled from "@emotion/styled";

export const LogorWrapper = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.main_accent};
  }
`;
