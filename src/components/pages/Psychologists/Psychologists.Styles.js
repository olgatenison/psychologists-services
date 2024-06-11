import styled from "@emotion/styled";

export const PsychologistsPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tag};

  overflow: hidden;
  height: 100vh;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const NoResultsMessage = styled.div`
  padding: 20px;
  padding-top: 60px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
`;
