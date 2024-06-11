import React, { useState } from "react";
import {
  FavoritesPageContainer,
  NoFavoritesResultsMessage,
  LoadMoreButtonFavorites,
} from "./Favorites.styles";
import Card from "../../layout/Card/Card";
import Filter from "../../layout/Filter/Filter";

const FavoritesPage = ({ favoritePsychologists }) => {
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [visibleFavorites, setVisibleFavorites] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(3);

  const handleFilter = (filter) => {
    let sortedFavorites = [...favoritePsychologists];
    switch (filter) {
      case "A to Z":
        sortedFavorites.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z to A":
        sortedFavorites.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Less than 10$":
        sortedFavorites = sortedFavorites.filter((p) => p.price_per_hour < 10);
        break;
      case "Greater than 10$":
        sortedFavorites = sortedFavorites.filter((p) => p.price_per_hour > 10);
        break;
      case "Popular":
        sortedFavorites.sort((a, b) => b.rating - a.rating);
        break;
      case "Not popular":
        sortedFavorites.sort((a, b) => a.rating - b.rating);
        break;
      case "Show all":
        sortedFavorites = favoritePsychologists;
        break;
      default:
        break;
    }
    setFilteredFavorites(sortedFavorites);
    setVisibleFavorites(sortedFavorites.slice(0, loadMoreCount));
  };

  const handleLoadMore = () => {
    const newCount = loadMoreCount + 3;
    setLoadMoreCount(newCount);
    setVisibleFavorites(filteredFavorites.slice(0, newCount));
  };

  return (
    <div>
      <>
        <Filter onFilter={handleFilter} />
        <FavoritesPageContainer>
          {filteredFavorites.length === 0 ? (
            <NoFavoritesResultsMessage>
              No psychologists selected yet.
            </NoFavoritesResultsMessage>
          ) : (
            <ul>
              {visibleFavorites.map((psychologist, index) => (
                <Card key={index} psychologist={psychologist} />
              ))}
            </ul>
          )}
          {visibleFavorites.length < filteredFavorites.length && (
            <LoadMoreButtonFavorites onClick={handleLoadMore}>
              Load More
            </LoadMoreButtonFavorites>
          )}
        </FavoritesPageContainer>
      </>
    </div>
  );
};

export default FavoritesPage;
