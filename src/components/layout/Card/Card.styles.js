import styled from "@emotion/styled";
export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
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
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  margin: 20px 0;
`;

export const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
`;

export const Review = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Reviewer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const ReviewerImage = styled.div`
  background-color: #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  margin-right: 10px;
`;

export const ReviewerName = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const ReviewerRating = styled.span`
  font-size: 16px;
  color: #888;
  margin-left: 5px;
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
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
