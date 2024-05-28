import styled from "@emotion/styled";

export const MainTitleStyled = styled.h1`
  font-size: 80px;
  line-height: 82px;
  /* font-size: clamp(26px, 2vw + 1rem, 80px);
  line-height: clamp(28px, 2vw + 1.1rem, 82px); */
  letter-spacing: -2%;

  padding-right: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.main_accent};
  }
`;
