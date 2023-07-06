import RecipeList from "@/components/recipe/RecipeList";
import "./base-page.scss";
import { useState } from "react";
import Filter from "@/components/Filter/Filter";

const Home = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleClick = () => {
    //
  };

  const handleFilterClick = () => {
    // Filter logic based on selectedOption and filter value
    console.log('Selected option:', selectedOption);
    console.log('Filter value:', filter);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="page">
      <div className="search">
        <input
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
          placeholder="couscous"
        />
        <button className="" onClick={handleClick}>
          rechercher
        </button>
      </div>

      <Filter
        selectedOption={selectedOption}
        filter={filter}
        onOptionChange={handleOptionChange}
        onFilterChange={(e) => setFilter(e.target.value)}
        onFilterClick={handleFilterClick}
      />
      <RecipeList />
    </div>
  );
};

export default Home;
