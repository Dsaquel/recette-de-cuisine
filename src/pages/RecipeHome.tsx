import RecipeList from "@/components/recipe/RecipeList"
import FormRecipe from '@/components/FormRecipe/FormRecipe'
import './base-page.scss'
const RecipeHome = () => {
    return (
        <div className="page">
            <FormRecipe />
            <RecipeList />
        </div>
    )
}

export default RecipeHome
