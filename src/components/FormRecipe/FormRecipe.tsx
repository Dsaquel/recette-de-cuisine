import { useRecipes } from "@/contexts/Recipe";
import { Difficulty, Recipe } from "@/types/recipe";
import { useForm } from "react-hook-form";
import "./FormRecipe.scss";

const FormRecipe = () => {
    const { handleSubmit, register } = useForm<Recipe>();
    const { addRecipe } = useRecipes();

    const onSubmit = (data: Recipe) => {
        addRecipe({
            id: Date.now(),
            title: data.title,
            description: data.description,
            difficulty: data.difficulty,
            tag: data.tag,
            preparationTime: data.preparationTime,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Titre</label>
                    <input placeholder="Titre" {...register("title")} />
                </div>
                <div>
                    <label htmlFor="img">Lien Image</label>
                    <input placeholder="Lien image" {...register("img")} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        placeholder="Description"
                        {...register("description")}
                    />
                </div>
                <div>
                    <label htmlFor="difficulty">Difficulté :</label>
                    <select id="difficulty" {...register("difficulty")}>
                        <option value={Difficulty.Easy}>Facile</option>
                        <option value={Difficulty.Medium}>Moyen</option>
                        <option value={Difficulty.Hard}>Difficile</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="preparationTime">
                        Temps de préparation
                    </label>
                    <input
                        placeholder="Temps de préparation"
                        {...register("preparationTime")}
                    />
                </div>

                {/* <label htmlFor="tag">Tag</label>
                <input placeholder="Tag" {...register("tag")} /> */}

                <button type="submit">
                    Ajouter la recette
                </button>
            </form>
        </div>
    );
};

export default FormRecipe;
