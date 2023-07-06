import { Recipe } from '@/types/recipe';
import React, { ReactNode } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

interface Props {
    children?: ReactNode | ReactNode[]
}

interface RecipeContext {
    recipes: Recipe[],
    addRecipe: (recipe: Recipe) => void;

    setRecipes: SetState<Recipe[]>
}

export const RecipePageContext = React.createContext<RecipeContext>({} as any)

const RecipeProvider = ({ children }: Props) => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      difficulty: 2,
      img: 'vite.svg',
      preparationTime: 389232,
      tag: 'Entrée',
      title: 'Couscous',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur dignissimos reprehenderit minus repudiandae pariatur vitae molestiae ullam tempore. Sit ab excepturi vero beatae id? Illo aliquid amet unde velit.',
    },
    {
      id: 2,
      difficulty: 3,
      img: 'vite.svg',
      preparationTime: 65321,
      tag: 'Dessert',
      title: 'Pizza',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur dignissimos reprehenderit minus repudiandae pariatur vitae molestiae ullam tempore. Sit ab excepturi vero beatae id? Illo aliquid amet unde velit.',
    },
    {
      id: 3,
      difficulty: 1,
      img: 'vite.svg',
      preparationTime: 232134,
      tag: 'Sucré',
      title: 'Crêpe américaine',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur dignissimos reprehenderit minus repudiandae pariatur vitae molestiae ullam tempore. Sit ab excepturi vero beatae id? Illo aliquid amet unde velit.',
    },
    {
      id: 4,
      difficulty: 2,
      img: 'vite.svg',
      preparationTime: 11232,
      tag: 'Sucré',
      title: 'Plat principal',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur dignissimos reprehenderit minus repudiandae pariatur vitae molestiae ullam tempore. Sit ab excepturi vero beatae id? Illo aliquid amet unde velit.',
    },
    {
      id: 5,
      difficulty: 1,
      img: 'vite.svg',
      preparationTime: 63211,
      tag: 'Sucré',
      title: 'Lazagne',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur dignissimos reprehenderit minus repudiandae pariatur vitae molestiae ullam tempore. Sit ab excepturi vero beatae id? Illo aliquid amet unde velit.',
    },
  ])

    const addRecipe = (recipe: Recipe) => {
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
