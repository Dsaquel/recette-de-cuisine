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
    const [recipes, setRecipes] = useState<Recipe[]>([])

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
