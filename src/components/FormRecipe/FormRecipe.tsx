import { useRecipes } from "@/contexts/Recipe";
import { Difficulty, IRecipe, IIngredient, UnitMeasure } from "@/types/recipe";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./FormRecipe.scss";

const FormRecipe = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }, // Récupère les erreurs du formulaire
    } = useForm<IRecipe & IIngredient>();

    const { addRecipe } = useRecipes();
    const [ingredients, setIngredients] = useState<IIngredient[]>([]);
    const [ingredientName, setIngredientName] = useState<string>("");
    const [ingredientQuantity, setIngredientQuantity] = useState<number>(1);
    const [ingredientUnitMeasure, setIngredientUnitMeasure] = useState<
        IIngredient["unitMeasure"]
    >(UnitMeasure.G);

    const onSubmit = (data: IRecipe) => {
        addRecipe({
            id: Date.now(),
            title: data.title,
            description: data.description,
            person: data.person,
            difficulty: data.difficulty,
            tag: data.tag,
            preparationTime: data.preparationTime,
            img: data.img,
            ingredients,
        });
        setIngredientName("");
        setIngredientQuantity(0);
    };

    const handleAddIngredient = () => {
        if (!ingredientName.length) return;
        setIngredients([
            ...ingredients,
            {
                id: Date.now(),
                name: ingredientName,
                quantity: ingredientQuantity,
                unitMeasure: ingredientUnitMeasure,
            },
        ]);
        setIngredientName("");
        setIngredientQuantity(1);
    };

    const handleRemoveIngredient = (id: number) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(
            updatedIngredients.indexOf(
                updatedIngredients.find(
                    (ingredient) => ingredient.id === id
                ) as IIngredient
            ),
            1
        );
        setIngredients(updatedIngredients);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Titre</label>
                    <input
                        placeholder="Titre"
                        {...register("title", {
                            required: "Ce champ est requis",
                        })}
                    />
                    {errors.title && (
                        <span className="error">{errors.title.message}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="img">Lien Image</label>
                    <input
                        placeholder="Lien image"
                        {...register("img", {
                            required: "Ce champ est requis",
                        })}
                    />
                    {errors.img && (
                        <span className="error">{errors.img.message}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        placeholder="Description"
                        {...register("description", {
                            required: "Ce champ est requis",
                        })}
                    />
                    {errors.description && (
                        <span className="error">
                            {errors.description.message}
                        </span>
                    )}
                </div>
                <div>
                    <label htmlFor="ingredients">Ingrédients</label>
                    {ingredients.map((ingredient) => (
                        <div className="ingredient" key={ingredient.id}>
                            <input disabled value={ingredient.name} />
                            <input disabled value={ingredient.quantity} />
                            <input disabled value={ingredient.unitMeasure} />
                            <button
                                className="close"
                                type="button"
                                onClick={() =>
                                    handleRemoveIngredient(ingredient.id)
                                }>
                                <span className="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                        </div>
                    ))}

                    <div className="ingredients">
                        <input
                            type="text"
                            placeholder="nom de l'ingrédiant"
                            value={ingredientName}
                            {...register("name", {
                                required: "Ce champ est requis",
                            })}
                            onChange={(e) => setIngredientName(e.target.value)}
                        />

                        {errors.name && (
                            <span className="error">{errors.name.message}</span>
                        )}

                        <input
                            type="number"
                            placeholder="quantité"
                            value={ingredientQuantity}
                            {...register("quantity", {
                                required: "Ce champ est requis",
                                min: {
                                    value: 1,
                                    message:
                                        "La quantité doit être supérieur à 0",
                                },
                            })}
                            onChange={(e) =>
                                setIngredientQuantity(+e.target.value)
                            }
                        />

                        {errors.quantity && (
                            <span className="error">
                                {errors.quantity.message}
                            </span>
                        )}
                        <select
                            value={ingredientUnitMeasure}
                            {...register("unitMeasure", {
                                required: "Ce champ est requis",
                            })}
                            onChange={(e) =>
                                setIngredientUnitMeasure(e.target.value)
                            }>
                            <option disabled>sélectionner</option>
                            <option value={UnitMeasure.KG}>
                                {UnitMeasure.KG}
                            </option>
                            <option value={UnitMeasure.L}>
                                {UnitMeasure.L}
                            </option>
                            <option value={UnitMeasure.G}>
                                {UnitMeasure.G}
                            </option>
                            <option value={UnitMeasure.CL}>
                                {UnitMeasure.CL}
                            </option>
                        </select>
                    </div>

                    <button
                        className="btn"
                        type="button"
                        onClick={handleAddIngredient}>
                        Ajouter un nouvel ingrédient
                    </button>
                    {errors.quantity && (
                        <span className="error">{errors.quantity.message}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="person">Nombre de personnes</label>
                    <input
                        type="number"
                        placeholder="Nombre de personnes"
                        {...register("person", {
                            required: "Ce champ est requis",
                            min: {
                                value: 1,
                                message:
                                    "Le nombre de personnes doit être supérieur à 0",
                            },
                        })}
                    />
                    {errors.person && (
                        <span className="error">{errors.person.message}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="difficulty">Difficulté :</label>
                    <select
                        id="difficulty"
                        {...register("difficulty", { required: true })}>
                        <option value={Difficulty.Easy}>
                            {Difficulty.Easy}
                        </option>
                        <option value={Difficulty.Medium}>
                            {Difficulty.Medium}
                        </option>
                        <option value={Difficulty.Hard}>
                            {Difficulty.Hard}
                        </option>
                    </select>
                    {errors.difficulty && (
                        <div style={{ color: "red" }}>
                            Veuillez sélectionner la difficulté
                        </div>
                    )}
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
                <div>
                    <label htmlFor="tag">Tag</label>
                    <input placeholder="Tag" {...register("tag")} />
                </div>
                <button className="btn" type="submit">
                    Ajouter la recette
                </button>

                <p>
                    {errors.title?.type === "required"
                        ? "Le champ titre est requis"
                        : errors.title?.type === "minLength"
                        ? "Ce champ doit contenir au moins 3 caractères"
                        : null}
                </p>
            </form>
        </div>
    );
};

export default FormRecipe;
