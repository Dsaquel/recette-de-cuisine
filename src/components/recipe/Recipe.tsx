import { IRecipe } from "@/types/recipe";
import "./Recipe.scss";

interface Props {
    recipe: IRecipe;
    showAllContent?: boolean;
}

const Recipe = ({ recipe, showAllContent = false }: Props) => {
    return (
        <div className="image-item">
            <img src={recipe.img} alt="Image 1" />
            <div className="image-text">
                <h3 className="card_title">{recipe.title}</h3>
                {showAllContent && (
                    <div>
                        {recipe.person > 1 ? (
                            <p className="card__text">
                                {recipe.person} personnes
                            </p>
                        ) : (
                            <p className="card__text">
                                {recipe.person} personne
                            </p>
                        )}
                        <p className="card_description">{recipe.description}</p>
                        <p className="card__text">{recipe.ingredients}</p>
                        <p className="card__text">{recipe.difficulty}</p>
                        <p className="card__text">
                            {recipe.preparationTime} min
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Recipe;
