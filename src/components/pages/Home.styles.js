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
  padding-right: 100px;
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

  position: relative;
`;

export const MainImg = styled.img`
  max-width: 464px;
  max-height: 526px;
  border-radius: 10px;
`;

export const MainQuestion = styled.div`
  position: absolute;
  top: 210px;
  left: -10px;
  rotate: -15deg;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.main_question};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const MainUser = styled.div`
  position: absolute;
  top: 68px;
  right: -10px;
  rotate: 15deg;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.main_user};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const MainInfoBox = styled.div`
  position: absolute;
  bottom: 95px;
  left: -80px;
  border-radius: 20px;
  width: 311px;
  height: 118px;
  background-color: ${({ theme }) => theme.colors.main_accent};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;
    color: rgba(250, 250, 250, 0.5);
  }
  span {
    display: block;
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    font-weight: 700;
  }
`;

export const WhiteDiv = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const WhiteDivSvg = styled.svg`
  width: 32px;
  height: 32px;

  fill: ${({ theme }) => theme.colors.main_accent};
`;
