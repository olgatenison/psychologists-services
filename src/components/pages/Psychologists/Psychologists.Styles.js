import styled from "@emotion/styled";

export const PsychologistsPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tag};
  margin-bottom: 100px;
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
  height: 100vh;
`;

export const LoadMoreButton = styled.button`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.main_accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 30px;
  padding: 14px 48px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: block;
  margin-top: 64px;
  transition: all 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverred_accent};
  }
`;
