// type de l'object recette
export interface IRecipe {
  id: number
  img?: string
  title: string
  description?: string
  ingredients: string
  person:number
  difficulty: Difficulty
  tag: string
  preparationTime: number
}






export enum Difficulty {
    Easy = 'Facile',
    Medium = 'Moyen',
    Hard = 'Difficile',
    Facile = "Facile"
}