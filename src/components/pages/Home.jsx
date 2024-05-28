import React from "react";
import MainTitle from "../generic/MainTitle/MainTitle";
import AccentButton from "../generic/AccentButton/AccentButton.jsx";
import {
  HomeSection,
  LeftColumn,
  Subtitle,
  RightColumn,
  MainImg,
  MainQuestion,
} from "./Home.styles.js";
import main from "./../../img/main.jpg";

const HomePage = () => {
  return (
    <HomeSection>
      <it add>
        <MainTitle>
          The road to the <span>depths</span> of the human soul
        </MainTitle>
        <Subtitle>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </Subtitle>
        <AccentButton>
          Get started <i className="arrow-icon"></i>
        </AccentButton>
      </it>

      <RightColumn>
        <MainImg src={main} alt="Psychologist" />
        <div className="info-box">
          <i className="icon"></i>
          <div>
            <p>
              Experienced psychologists<span>15,000 </span>
            </p>
          </div>
        </div>
        <MainQuestion>?</MainQuestion>
        <MainUser>
          <i className="icon"></i>
        </MainUser>
      </RightColumn>
    </HomeSection>
  );
};

export default HomePage;
