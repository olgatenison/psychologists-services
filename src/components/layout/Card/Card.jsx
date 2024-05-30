// Card.jsx
import React, { useState } from "react";
import {
  CardContainer,
  CardHeader,
  CardInfo,
  Role,
  Name,
  Rating,
  HeartIcon,
  Tag,
  Description,
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

const Card = () => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <CardContainer>
      <CardHeader>
        <img src="profile-image.jpg" alt="Dr. Sarah Davis" />
        <div>
          <Role>Psychologist</Role>
          <Name>Dr. Sarah Davis</Name>
          <Rating>
            <span>⭐ Rating: 4.75</span>
            <span>| Price / 1 hour: 120$</span>
            <HeartIcon>❤️</HeartIcon>
          </Rating>
        </div>
      </CardHeader>
      <CardInfo>
        <Tag>Experience: 12 years</Tag>
        <Tag>License: Licensed Psychologist (License #67890)</Tag>
        <Tag>Specialization: Depression and Mood Disorders</Tag>
        <Tag>Initial consultation: Free 45-minute initial consultation</Tag>
      </CardInfo>
      <Description>
        Dr. Sarah Davis is a highly experienced and licensed psychologist
        specializing in Depression and Mood Disorders. With 12 years of
        practice, she has helped numerous individuals overcome their depression
        and regain control of their lives. Dr. Davis is known for her empathetic
        and understanding approach to therapy, making her clients feel
        comfortable and supported throughout their journey to better mental
        health.
      </Description>
      {expanded && (
        <AdditionalInfo>
          <Review>
            <Reviewer>
              <ReviewerImage>M</ReviewerImage>
              <ReviewerName>Michael Brown</ReviewerName>
              <ReviewerRating>⭐ 4.5</ReviewerRating>
            </Reviewer>
            <ReviewerComment>
              Dr. Davis has been a great help in managing my depression. Her
              insights have been valuable.
            </ReviewerComment>
          </Review>
          <Review>
            <Reviewer>
              <ReviewerImage>L</ReviewerImage>
              <ReviewerName>Linda Johnson</ReviewerName>
              <ReviewerRating>⭐ 5.0</ReviewerRating>
            </Reviewer>
            <ReviewerComment>
              I'm very satisfied with Dr. Davis's therapy. She's understanding
              and empathetic.
            </ReviewerComment>
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
