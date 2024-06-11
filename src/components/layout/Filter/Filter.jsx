import React, { useState } from "react";
import {
  FilterContainer,
  FilterLabel,
  Dropdown,
  DropdownButton,
  Options,
  OptionItem,
} from "./Filter.styles.js";

const Filter = ({ psychologists, onFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("A to Z");
  const [showDropdown, setShowDropdown] = useState(false);

  const filterOptions = [
    "A to Z",
    "Z to A",
    "Less than 10$",
    "Greater than 10$",
    "Popular",
    "Not popular",
    "Show all",
  ];

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setShowDropdown(false);
    onFilter(filter);
  };

  return (
    <FilterContainer>
      <FilterLabel>Filters</FilterLabel>
      <Dropdown>
        <DropdownButton onClick={() => setShowDropdown(!showDropdown)}>
          {selectedFilter}
        </DropdownButton>
        {showDropdown && (
          <Options>
            {filterOptions.map((filter, index) => (
              <OptionItem
                key={index}
                onClick={() => handleFilterSelect(filter)}
              >
                {filter}
              </OptionItem>
            ))}
          </Options>
        )}
      </Dropdown>
    </FilterContainer>
  );
};

export default Filter;
