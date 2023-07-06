import { useRecipes } from "@/contexts/Recipe";
import "./RecipeList.scss";
import Recipe from "./Recipe";

// TODO: onclick switch sur /recipe/:id
const RecipeList = () => {
    const { recipes } = useRecipes();
    return (
        <div className="image-grid">
            {recipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id} />
            ))}
        </div>
    );
};

export default RecipeList;
