// type de l'object recette
export interface IRecipe {
  id: number
  img?: string
  title: string
  description?: string
  ingredients: IIngredient[]
  person:number
  difficulty: Difficulty
  tag: string
  preparationTime: number
}

export interface IIngredient {
  id: number
  name: string
  quantity: number
  unitMeasure: UnitMeasure
}

export enum Difficulty {
    Easy = 'Facile',
    Medium = 'Moyen',
    Hard = 'Difficile',
}

export enum UnitMeasure {
  NONE,
  CL,
  L,
  KG,
  G
}