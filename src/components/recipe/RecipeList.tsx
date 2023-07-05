import { useRecipes } from '@/contexts/Recipe'
import './recipe-list.scss'
import RecipeDetail from './RecipeDetail'

const RecipeList = () => {
  const { recipes } = useRecipes()
  return <div>{recipes.length ? <div className='empty-list'>Pas de recettes</div> : <div className='list'>
    {
      recipes.map((recipe) => <RecipeDetail key={recipe.id}  />)
    }
    </div>}</div>
}

export default RecipeList
