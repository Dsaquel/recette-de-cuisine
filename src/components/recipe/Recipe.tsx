import { useState } from "react";
import { IIngredient, IRecipe } from "@/types/recipe";
import "./Recipe.scss";

interface Props {
    recipe: IRecipe;
    showAllContent?: boolean;
}

const Recipe = ({ recipe, showAllContent = false }: Props) => {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newQuantity = Number(event.target.value);
        setQuantity(newQuantity);
    };

    const personNumber = quantity; // Calcul du nombre de personnes

    return (
        <div
            className="image-item"
            style={{ transform: showAllContent ? "unset" : "0.3s" }}>
            <img src={recipe.img} alt="Image 1" />
            <div className="image-text">
                <h3 className="card_title">{recipe.title}</h3>
                {showAllContent && (
                    <div>
                        <p className="card__text">
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                value={quantity}
                                min="1"
                                onChange={handleQuantityChange}
                            />
                            personne{personNumber > 1 ? "s" : ""}
                        </p>
                        <p className="card_description">{recipe.description}</p>

                        {recipe.ingredients.map((ingredient) => (
                            <div
                                className="content_ingredient"
                                key={ingredient.id}>
                                <p>{ingredient.name}</p>
                                <span className="card__text">
                                    {ingredient.quantity * personNumber}{" "}
                                    {ingredient.unitMeasure}
                                </span>
                            </div>
                        ))}

                        <p className="card__text">{recipe.difficulty}</p>
                        <p className="card__text">
                            {recipe.preparationTime} min
                        </p>
                        <p
                            className="card__text"
                            style={{ textTransform: "capitalize" }}>
                            {recipe.tag}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Recipe;
