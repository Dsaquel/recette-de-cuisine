import React, { ReactNode } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Recipe } from '../types/recipe'

interface Props {
    children?: ReactNode | ReactNode[]
}

interface RecipeContext {
    recipes: Recipe[]
    setRecipes: SetState<Recipe[]>
}

export const RecipePageContext = React.createContext<RecipeContext>({} as any)

const RecipeProvider = ({ children }: Props) => {
    const [recipes, setRecipes] = useState<Recipe[]>([])

    return (
        <RecipePageContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipePageContext.Provider>
    )
}

export const useContextCats = () => {
    return useContext(RecipePageContext)
}

export default RecipeProvider
