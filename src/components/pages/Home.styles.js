import styled from "@emotion/styled";

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 78px;
  padding-bottom: 97px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LeftColumn = styled.div`
  max-width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
`;

export const RightColumn = styled.div`
  max-width: 50%;
  padding: 20px;
  margin: 0 auto;
`;

export const MainImg = styled.img`
  max-width: 464px;
  max-height: 526px;
  border-radius: 10px;
  position: relative;
`;

export const MainQuestion = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.main_question};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
`;
