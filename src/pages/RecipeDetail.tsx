import Recipe from "@/components/recipe/Recipe"
import { useRecipes } from "@/contexts/Recipe"
import { useParams } from 'react-router-dom';
import { IRecipe } from '@/types/recipe'
import './base-page.scss'
const RecipeDetail = () => {
  const { recipes } = useRecipes()
  let { id } = useParams();
    
    return (
        <div className="page">
            <Recipe recipe={recipes.find(recipe => recipe.id === +(id as string)) as IRecipe} showAllContent={true} />
        </div>
    )
}

export default RecipeDetail
