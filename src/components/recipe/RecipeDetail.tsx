import { Recipe } from '@/types/recipe'
import './RecipeDetail.scss'

interface Props {
  recipe: Recipe
}

const RecipeDetail = ({ recipe }: Props) => {
  return (
    <div className="card">
      <img src={recipe.image} />
      <div className="title"></div>
      {recipe.description && (
        <div className="description">{recipe.description}</div>
      )}
      <div className="difficulty">{recipe.difficulty}</div>
      <div className="preparation-time">{recipe.preparationTime}</div>
      <div className="tag">{recipe.tag}</div>
    </div>
  )
}

export default RecipeDetail
