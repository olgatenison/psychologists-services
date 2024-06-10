import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  width: 438px;

  form {
    width: 100%;
  }
`;

export const PsychologistsModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  margin-top: 43px;
  img {
    width: 44px;
    height: 44px;
    border-radius: 15px;
  }
`;

export const RoleModal = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey};
`;

export const NameModal = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
