import { IRecipe } from "@/types/recipe";
import "./Recipe.scss";

interface Props {
    recipe: IRecipe;
}

const Recipe = ({ recipe }: Props) => {
    return (
        
        <div className="image-item">
            <img src={recipe.img} alt="Image 1" />
            <div className="image-text">
                <h3>{recipe.title}</h3>
                {/* <p>{recipe.description}</p> */}
                {/* <p className="card__text">{recipe.ingredients}</p> */}
                <p>{recipe.preparationTime} min</p>
                <button>
                    Voir la recette
                </button>
            </div>
        </div>
    );
};

export default Recipe;
