// type de l'object recette
export interface Recipe {
    id: number
    title: string
    description?: string
    image: string
    difficulty: 1 | 2 | 3 | 4 | 5
    tag: string
    preparationTime: number
}
