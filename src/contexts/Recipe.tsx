import { Difficulty, IRecipe, UnitMeasure } from '@/types/recipe'
import React, { ReactNode } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

interface Props {
  children?: ReactNode | ReactNode[]
}

interface RecipeContext {
  recipes: IRecipe[]
  addRecipe: (recipe: IRecipe) => void

  setRecipes: SetState<IRecipe[]>
}

export const RecipePageContext = React.createContext<RecipeContext>({} as any)

const RecipeProvider = ({ children }: Props) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([
    {
      id: 1,
      difficulty: Difficulty.Easy,
      img: 'vite.svg',
      preparationTime: 60,
      tag: 'Plat',
      title: 'Couscous',
      ingredients: [
        {
          id: 1,
          name: 'Merguez',
          quantity: 3,
          unitMeasure: UnitMeasure.KG,
        },
        {
          id: 2,
          name: 'Boeuf',
          quantity: 8,
          unitMeasure: UnitMeasure.KG,
        },
        {
          id: 3,
          name: 'semoule de blé',
          quantity: 94039,
          unitMeasure: UnitMeasure.G,
        },
        {
          id: 4,
          name: 'légumes',
          quantity: 4,
          unitMeasure: UnitMeasure.G,
        },
      ],
      person: 4,
      description:
        "Le couscous est un plat d'origine nord-africaine composé d'un plat conséquent de semoule de blé et accompagné de légumes, parfois enrichi de viande d'agneau, de poulet, de brochettes ou de poissons. Il est le plus souvent accompagné par un bouillon pour le goût et de gigots d'agneaux, c'est un plat qui vient du Maroc.",
    },
    {
      id: 2,
      difficulty: Difficulty.Easy,
      preparationTime: 60,
      img: 'vite.svg',
      person: 237,
      tag: 'Dessert',
      title: 'Pizza',
      ingredients: [
        {
          id: 1,
          name: 'Merguez',
          quantity: 3,
          unitMeasure: UnitMeasure.KG,
        },
        {
          id: 2,
          name: 'Boeuf',
          quantity: 8,
          unitMeasure: UnitMeasure.KG,
        },
        {
          id: 3,
          name: 'semoule de blé',
          quantity: 94039,
          unitMeasure: UnitMeasure.G,
        },
        {
          id: 4,
          name: 'légumes',
          quantity: 4,
          unitMeasure: UnitMeasure.G,
        },
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur dignissimos reprehenderit minus repudiandae pariatur vitae molestiae ullam tempore. Sit ab excepturi vero beatae id? Illo aliquid amet unde velit.',
    },
    {
      id: 3,
      difficulty: Difficulty.Easy,
      preparationTime: 60,
      img: 'vite.svg',
      tag: 'Sucré',
      title: 'Crêpe américaine',
      person: 987,
      ingredients: [
        {
          id: 1,
          name: 'Merguez',
          quantity: 3,
          unitMeasure: UnitMeasure.KG,
        },
        {
          id: 2,
          name: 'Boeuf',
          quantity: 8,
          unitMeasure: UnitMeasure.KG,
        },
        {
          id: 3,
          name: 'semoule de blé',
          quantity: 94039,
          unitMeasure: UnitMeasure.G,
        },
        {
          id: 4,
          name: 'légumes',
          quantity: 4,
          unitMeasure: UnitMeasure.G,
        },
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur dignissimos reprehenderit minus repudiandae pariatur vitae molestiae ullam tempore. Sit ab excepturi vero beatae id? Illo aliquid amet unde velit.',
    },
  ])

  const addRecipe = (recipe: IRecipe) => {
    setRecipes([...recipes, recipe])
  }

  return (
    <RecipePageContext.Provider value={{ recipes, addRecipe, setRecipes }}>
      {children}
    </RecipePageContext.Provider>
  )
}

export const useRecipes = () => {
  return useContext(RecipePageContext)
}

export default RecipeProvider
