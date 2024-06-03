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

export const StyledAccentButton = styled(AccentButton)`
  width: 100%;
`;
