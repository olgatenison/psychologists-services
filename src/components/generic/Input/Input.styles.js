import styled from "@emotion/styled";

export const InputField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;

  input {
    height: 52px;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray10};
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};

    ::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }

    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray50};
    }

    &:not(:placeholder-shown) {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 55%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

export const SelectField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;

  select {
    height: 52px;
    width: 100%;
    padding: 16px;

    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray10};
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};

    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray50};
    }
    &::placeholder {
      font-family: "Inter", sans-serif;
      font-size: 16px;
    }
  }
`;
export const InputFieldTxt = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;

  textarea {
    height: 116px;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray10};
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};

    ::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }

    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray50};
    }

    &:not(:placeholder-shown) {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`;
