// Card.jsx
import React, { useState } from "react";
import {
  CardContainer,
  FirstWrapper,
  CardHeader,
  CardInfo,
  Role,
  Name,
  Rating,
  HeartIcon,
  Tag,
  AdditionalInfo,
  Review,
  Reviewer,
  ReviewerImage,
  ReviewerName,
  ReviewerRating,
  ReviewerComment,
  Button,
  ReadMoreButton,
} from "./Card.styles.js";
import svg from "../../../img/svg/sprite.svg";
import start from "../../../img/svg/star.svg";
import MainTxt from "./../../generic/MainTxt/MainTxt";

const Card = () => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <CardContainer>
      <img src="profile-image.jpg" alt="Dr. Sarah Davis" />
      <FirstWrapper>
        <CardHeader>
          <div>
            <Role>Psychologist</Role>
            <Name>Dr. Sarah Davis</Name>{" "}
          </div>
          <Rating>
            <img src={start} alt="star" className="star" />
            <div>
              <span className="tostar"> Rating: 4.75</span>
            </div>
            <div className="grey">|</div>
            <div>
              Price / 1 hour:<span className="green"> 120$</span>
            </div>
            <HeartIcon>
              <use href={`${svg}#icon-like`} />
            </HeartIcon>
          </Rating>
        </CardHeader>
        <CardInfo>
          <Tag>
            Experience:<span>12 years</span>{" "}
          </Tag>
          <Tag>
            License: <span>Licensed Psychologist (License #67890)</span>
          </Tag>
          <Tag>
            Specialization:<span>Depression and Mood Disorders</span>{" "}
          </Tag>
          <Tag>
            Initial consultation:{" "}
            <span>Free 45-minute initial consultation</span>
          </Tag>
        </CardInfo>
        <MainTxt>
          Dr. Sarah Davis is a highly experienced and licensed psychologist
          specializing in Depression and Mood Disorders. With 12 years of
          practice, she has helped numerous individuals overcome their
          depression and regain control of their lives. Dr. Davis is known for
          her empathetic and understanding approach to therapy, making her
          clients feel comfortable and supported throughout their journey to
          better mental health.
        </MainTxt>
      </FirstWrapper>

      {expanded && (
        <AdditionalInfo>
          <Review>
            <Reviewer>
              <ReviewerImage>M</ReviewerImage>
              <div>
                <ReviewerName>Michael Brown</ReviewerName>
                <ReviewerRating>⭐ 4.5</ReviewerRating>
              </div>
            </Reviewer>
            <MainTxt>
              Dr. Davis has been a great help in managing my depression. Her
              insights have been valuable.
            </MainTxt>
          </Review>
          <Review>
            <Reviewer>
              <ReviewerImage>L</ReviewerImage>
              <ReviewerName>Linda Johnson</ReviewerName>
              <ReviewerRating>⭐ 5.0</ReviewerRating>
            </Reviewer>
            <MainTxt>
              I'm very satisfied with Dr. Davis's therapy. She's understanding
              and empathetic.
            </MainTxt>
          </Review>
          <Button>Make an appointment</Button>
        </AdditionalInfo>
      )}
      <ReadMoreButton onClick={handleReadMore}>
        {expanded ? "Read less" : "Read more"}
      </ReadMoreButton>
    </CardContainer>
  );
};

export default Card;
