import { useRecipes } from "@/contexts/Recipe";
import "./RecipeList.scss";
import Recipe from "./Recipe";
import { useNavigate } from "react-router-dom";

// TODO: onclick switch sur /recipe/:id
const RecipeList = () => {
    const { recipes } = useRecipes();

    const navigate = useNavigate();
    
    const handleClick = (id: number) => {
        console.log('je change vers recipe')
        navigate(`/recipe/${id}`);
    }

    return (
        <div className="image-grid">
            {recipes.map((recipe) => (
                <div onClick={() => handleClick(recipe.id)} key={recipe.id}>
                    <Recipe recipe={recipe} />
                </div>
            ))}
        </div>
    );
};

export default RecipeList;


