// type de l'object recette
export interface Recipe {
  id: number
  img?: string
  title: string
  description?: string
  difficulty: Difficulty
  tag: string
  preparationTime: number
}

// faire une enum pour les difficultés
export enum Difficulty {
  Easy = 1,
  Medium = 2,
  Hard = 3,
}