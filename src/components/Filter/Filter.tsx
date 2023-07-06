import React from 'react';

interface FilterProps {
  selectedOption: string;
  filter: string;
  onOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterClick: () => void;
}

const Filter: React.FC<FilterProps> = ({
  selectedOption,
  filter,
  onOptionChange,
  onFilterChange,
  onFilterClick,
}) => {
  return (
    <div className="search">
      <label htmlFor="inputChoice">Filter by:</label>
      <select id="inputChoice" value={selectedOption} onChange={onOptionChange}>
        <option value="Title">Title</option>
        <option value="Description">Description</option>
        <option value="Difficulty">Difficulty</option>
        <option value="Tag">Tag</option>
        <option value="Preparation Time">Preparation Time</option>
      </select>

      <input value={filter} onChange={onFilterChange} placeholder="filter" />
      <button className="" onClick={onFilterClick}>
        Filter
      </button>
    </div>
  );
};

export default Filter;
