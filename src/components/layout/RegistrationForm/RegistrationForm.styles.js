import styled from "@emotion/styled";
import AccentButton from "../../generic/AccentButton/AccentButton";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

  width: 100%;
  max-width: 438px;
`;

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
    background-color: ${({ theme }) =>
      theme.colors.white}; /* Начальный цвет фона */

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

export const StyledAccentButton = styled(AccentButton)`
  width: 100%;
`;
