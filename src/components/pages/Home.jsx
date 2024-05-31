import React, { useState } from "react";
import MainTitle from "../generic/MainTitle/MainTitle";
import MainButton from "../generic/MainButton/MainButton.jsx";
import {
  HomeSection,
  LeftColumn,
  Subtitle,
  RightColumn,
  MainImg,
  MainQuestion,
  MainUser,
  MainInfoBox,
  WhiteDiv,
  WhiteDivSvg,
} from "./Home.styles.js";
import main from "./../../img/main.jpg";
import Card from "../layout/Card/Card.jsx";
import Modal from "./../layout/Modal/Modal.jsx";
import svg from "../../img/svg/sprite.svg";

const HomePage = () => {
  // open and closeModal using Portal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* <button onClick={openModal}>Log In</button> */}
      <Card></Card>
      <HomeSection>
        <LeftColumn>
          <MainTitle>
            The road to the <span>depths</span> of the human soul
          </MainTitle>
          <Subtitle>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </Subtitle>
          <MainButton>
            <div>
              <p>Get started</p>
              <svg>
                <use href={`${svg}#icon-arrow-2`} />
              </svg>
            </div>
          </MainButton>
        </LeftColumn>

        <RightColumn>
          <MainImg src={main} alt="Psychologist" />
          <MainInfoBox>
            <WhiteDiv>
              <WhiteDivSvg>
                <use href={`${svg}#icon-check`}></use>
              </WhiteDivSvg>
            </WhiteDiv>
            <p>
              Experienced psychologists<span>15,000</span>
            </p>
          </MainInfoBox>
          <MainQuestion>
            <svg>
              <use href={`${svg}#icon-question`}></use>
            </svg>
          </MainQuestion>
          <MainUser>
            <svg>
              <use href={`${svg}#icon-user`}></use>
            </svg>
          </MainUser>
        </RightColumn>
      </HomeSection>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
      </Modal>
    </>
  );
};

export default HomePage;
