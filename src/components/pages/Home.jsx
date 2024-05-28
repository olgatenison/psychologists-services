import React from "react";

const HomePage = () => {
  return (
    <section className="home-section">
      <div className="left-column">
        <h1>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button className="green-button">
          Get started <i className="arrow-icon"></i>
        </button>
      </div>

      <div className="right-column">
        <img src="path/to/image.jpg" alt="Psychologist" />
        <div className="info-box">
          <i className="icon"></i>
          <p>Experienced psychologists</p>
        </div>
        <div className="info-box">
          <i className="icon"></i>
          <p>15,000</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
