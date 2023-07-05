import { useRecipes } from '@/contexts/Recipe'
import { Recipe } from '@/types/recipe'
import { useForm } from 'react-hook-form'
import './FormRecipe.scss'

const FormRecipe = () => {
  const { handleSubmit, register } = useForm<Recipe>()
  const { addRecipe } = useRecipes()

  const onSubmit = (data: Recipe) => {
    addRecipe({
      id: Date.now(),
      title: data.title,
      description: data.description,
      difficulty: data.difficulty,
      tag: data.tag,
      preparationTime: data.preparationTime,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Titre</label>
        <input placeholder="Titre" {...register('title')} />
        <label htmlFor="description">Description</label>
        <input placeholder="Description" {...register('description')} />
        <label htmlFor="difficulty">Difficulté</label>
        <input placeholder="Difficulté" {...register('difficulty')} />
        <label htmlFor="tag">Tag</label>
        <input placeholder="Tag" {...register('tag')} />
        <label htmlFor="preparationTime">Temps de préparation</label>
        <input
          placeholder="Temps de préparation"
          {...register('preparationTime')}
        />

        <button className='success' type="submit">Ajouter la recette</button>
      </form>
    </div>
  )
}

export default FormRecipe
