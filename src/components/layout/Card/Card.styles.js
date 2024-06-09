import styled from "@emotion/styled";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  padding: 20px;
  width: 1184px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 24px;
`;
export const CardPortrait = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.light_accent};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  img {
    width: 96px;
    height: 96px;
    border-radius: 15px;
    position: relative;
  }
`;
export const Online = styled.div`
  position: absolute;
  z-index: 30;
  top: 10px;
  right: 10px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 3px solid white;
  background-color: ${({ theme }) => theme.colors.green_online};
`;
export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
`;

export const Role = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 16px;
  font-weight: 500;
  span {
    color: ${({ theme }) => theme.colors.black};
  }
  .grey {
    color: ${({ theme }) => theme.colors.grey};
  }
  .green {
    color: ${({ theme }) => theme.colors.green_online};
  }
  .star {
    width: 16px;
    height: 16px;
    left: 0px;
    margin-right: -5px;
  }
`;

export const HeartIcon = styled.svg`
  width: 26px;
  height: 26px;
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.black};
  transition: all 0.3s linear;
  :hover {
    fill: ${({ theme }) => theme.colors.main_accent};
    stroke: ${({ theme }) => theme.colors.main_accent};
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`;

export const Tag = styled.p`
  background-color: ${({ theme }) => theme.colors.tag};
  color: ${({ theme }) => theme.colors.grey};
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  span {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
`;

export const Review = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const Reviewer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 16px;
`;

export const ReviewerImage = styled.div`
  background-color: ${({ theme }) => theme.colors.light_accent};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main_accent};
  margin-right: 10px;
  font-weight: 500;
`;

export const ReviewerName = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  font-weight: 500;
`;

export const ReviewerRating = styled.div`
  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const ReviewerComment = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main_accent};
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverred_accent};
  }
`;

export const ReadMoreButton = styled.button`
  text-align: left;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-size: 16px;
  margin-top: 14px;
  padding-left: 0;
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  transition: all 0.3s linear;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};
  }
`;
