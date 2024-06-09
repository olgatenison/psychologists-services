import React, { useState, useEffect } from "react";
import { getPsychologists } from "./../../../helpers/firebaseService";
import Card from "../../layout/Card/Card";
import { PsychologistsPageContainer } from "./Psychologists.Styles";
const PsychologistsPage = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPsychologists = async () => {
      setLoading(true);
      const data = await getPsychologists();
      setPsychologists(data);
      setLoading(false);
    };

    fetchPsychologists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PsychologistsPageContainer>
      <ul>
        {psychologists.map((psychologist, index) => (
          <Card key={index} psychologist={psychologist} />
        ))}
      </ul>
    </PsychologistsPageContainer>
  );
};

export default PsychologistsPage;
