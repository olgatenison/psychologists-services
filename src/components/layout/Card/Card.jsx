import React, { useState } from "react";
import MainTxt from "./../../generic/MainTxt/MainTxt";
import {
  CardContainer,
  CardPortrait,
  Online,
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
  Button,
  ReadMoreButton,
} from "./Card.styles.js";
import svg from "../../../img/svg/sprite.svg";
import start from "../../../img/svg/star.svg";
import Appointment from "../Appointment/Appointment.jsx";
import Modal from "./../Modal/Modal";

const Card = ({ psychologist }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <CardContainer>
      <CardPortrait>
        <img src={psychologist.avatar_url} alt={psychologist.name} />
        <Online></Online>
      </CardPortrait>
      <FirstWrapper>
        <CardHeader>
          <div>
            <Role>Psychologist</Role>
            <Name>{psychologist.name}</Name>
          </div>
          <Rating>
            <img src={start} alt="star" className="star" />
            <div>
              <span className="tostar"> Rating: {psychologist.rating}</span>
            </div>
            <div className="grey">|</div>
            <div>
              Price / 1 hour:{" "}
              <span className="green"> {psychologist.price_per_hour}$</span>
            </div>
            <HeartIcon>
              <use href={`${svg}#icon-like`} />
            </HeartIcon>
          </Rating>
        </CardHeader>

        <CardInfo>
          <Tag>
            Experience: <span>{psychologist.experience}</span>
          </Tag>
          <Tag>
            License: <span>{psychologist.license}</span>
          </Tag>
          <Tag>
            Specialization: <span>{psychologist.specialization}</span>
          </Tag>
          <Tag>
            Initial consultation:{" "}
            <span>{psychologist.initial_consultation}</span>
          </Tag>
        </CardInfo>

        <MainTxt>{psychologist.about}</MainTxt>

        {expanded && (
          <AdditionalInfo>
            {psychologist.reviews.map((review, index) => (
              <Review key={index}>
                <Reviewer>
                  <ReviewerImage>{review.reviewer.charAt(0)}</ReviewerImage>
                  <div>
                    <ReviewerName>{review.reviewer}</ReviewerName>
                    <ReviewerRating>
                      <img src={start} alt="star" className="star" />
                      {review.rating}
                    </ReviewerRating>
                  </div>
                </Reviewer>
                <MainTxt>{review.comment}</MainTxt>
              </Review>
            ))}
            <Button onClick={openModal}>Make an appointment</Button>
          </AdditionalInfo>
        )}

        <ReadMoreButton onClick={handleReadMore}>
          {expanded ? "Read less" : "Read more"}
        </ReadMoreButton>
      </FirstWrapper>

      {/* modal window */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Appointment psychologist={psychologist} />
      </Modal>
    </CardContainer>
  );
};

export default Card;
