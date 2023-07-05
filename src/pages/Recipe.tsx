import FormRecipe from "@/components/FormRecipe/FormRecipe"
import RecipeList from "@/components/recipe/RecipeList"
import RecipeProvider from "@/contexts/Recipe"

const Recipe = () => {
    return (
        <RecipeProvider>
            <RecipeList />
            <FormRecipe />
        </RecipeProvider>
    )
}

export default Recipe
