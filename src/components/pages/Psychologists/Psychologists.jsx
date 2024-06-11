import React, { useState, useEffect } from "react";
import { getPsychologists } from "./../../../helpers/firebaseService";
import Card from "../../layout/Card/Card";
import {
  PsychologistsPageContainer,
  NoResultsMessage,
  LoadMoreButton,
} from "./Psychologists.Styles";
import Filter from "./../../layout/Filter/Filter";

const PsychologistsPage = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [filteredPsychologists, setFilteredPsychologists] = useState([]);
  const [visiblePsychologists, setVisiblePsychologists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMoreCount, setLoadMoreCount] = useState(3);

  useEffect(() => {
    const fetchPsychologists = async () => {
      setLoading(true);
      const data = await getPsychologists();
      setPsychologists(data);
      setFilteredPsychologists(data);
      setVisiblePsychologists(data.slice(0, loadMoreCount));
      setLoading(false);
    };

    fetchPsychologists();
  }, []);

  const handleFilter = (filter) => {
    let sortedPsychologists = [...psychologists];
    switch (filter) {
      case "A to Z":
        sortedPsychologists.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z to A":
        sortedPsychologists.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Less than 10$":
        sortedPsychologists = sortedPsychologists.filter(
          (p) => p.price_per_hour < 10
        );
        break;
      case "Greater than 10$":
        sortedPsychologists = sortedPsychologists.filter(
          (p) => p.price_per_hour > 10
        );
        break;
      case "Popular":
        sortedPsychologists.sort((a, b) => b.rating - a.rating);
        break;
      case "Not popular":
        sortedPsychologists.sort((a, b) => a.rating - b.rating);
        break;
      case "Show all":
        sortedPsychologists = psychologists;
        break;
      default:
        break;
    }
    setFilteredPsychologists(sortedPsychologists);
    setVisiblePsychologists(sortedPsychologists.slice(0, loadMoreCount));
  };

  const handleLoadMore = () => {
    const newCount = loadMoreCount + 3;
    setLoadMoreCount(newCount);
    setVisiblePsychologists(filteredPsychologists.slice(0, newCount));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Filter onFilter={handleFilter} />
      <PsychologistsPageContainer>
        <ul>
          {visiblePsychologists.length === 0 ? (
            <NoResultsMessage>
              No psychologists match the selected filter criteria.
            </NoResultsMessage>
          ) : (
            visiblePsychologists.map((psychologist, index) => (
              <Card key={index} psychologist={psychologist} />
            ))
          )}
        </ul>
        {visiblePsychologists.length < filteredPsychologists.length && (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        )}
      </PsychologistsPageContainer>
    </>
  );
};

export default PsychologistsPage;
