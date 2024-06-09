import styled from "@emotion/styled";

export const UserLogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const UserIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.main_accent};
`;
export const UserName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  margin-right: 20px;
`;
