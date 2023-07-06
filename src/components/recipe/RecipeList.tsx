import { useRecipes } from '@/contexts/Recipe'
import './RecipeList.scss'
import RecipeDetail from './RecipeDetail'

const RecipeList = () => {
  const { recipes } = useRecipes()
  return (
    <div>
      <div className="list">
        {recipes.map((recipe) => (
          <RecipeDetail recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  )
}

export default RecipeList;
