import React, { useState } from 'react';
import { useRecipes } from '@/contexts/Recipe';
// import RecipeDetail from './RecipeDetail';
import Recipe from './Recipe';
interface RecipeListProps {
  filterOption: string;
  filterValue: string;
}

const RecipeList: React.FC<RecipeListProps> = ({ filterOption, filterValue }) => {
  const { recipes } = useRecipes();
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  React.useEffect(() => {
    // Filter recipes based on the selected option and filter value
    const filtered = recipes.filter((recipe) => {
      const { title, description, difficulty, tag, preparationTime } = recipe;

      switch (filterOption) {
        case 'Title':
          return title.toLowerCase().includes(filterValue.toLowerCase());
        case 'Description':
          return description?.toLowerCase().includes(filterValue.toLowerCase());
        case 'Difficulty':
          return difficulty ==(Number(filterValue));
        case 'Tag':
          return tag.toLowerCase().includes(filterValue.toLowerCase());
        case 'Preparation Time':
          return preparationTime == Number((filterValue));
        default:
          return true;
      }
    });

    setFilteredRecipes(filtered);
  }, [filterOption, filterValue, recipes]);

  return (
    <div>
      <div className="list">
        {filteredRecipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;