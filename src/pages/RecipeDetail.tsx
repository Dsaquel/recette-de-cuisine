import Recipe from "@/components/recipe/Recipe"
import { useRecipes } from "@/contexts/Recipe"
import { useParams } from 'react-router-dom';
import { IRecipe } from '@/types/recipe'

const RecipeDetail = () => {
  const { recipes } = useRecipes()
  let { id } = useParams();
    
    return (
        <div>
            <Recipe recipe={recipes.find(recipe => recipe.id === +(id as string)) as IRecipe} />
        </div>
    )
}

export default RecipeDetail
